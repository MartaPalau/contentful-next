import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../lib/apollo";
import { IParams } from "./types/application";

const moduleBannerFragment = gql`
  fragment ModuleBannerFragment on ModuleBanner {
    __typename
    sys {
      id
    }
    title
    isClaimModule
  }
`;
const moduleTabsInfoFragment = gql`
  fragment ModuleTabsInfoFragment on ModuleTabsInfo {
    __typename
    sys {
      id
    }
    slug
  }
`;
const applicationModeFragment = gql`
  fragment ApplicationModeFragment on ApplicationMode {
    name
    uuid
  }
`;

const SeosemPage: NextPage = () => {
  // HOW TO CREATE FOLDER STRUCTURE?? HOW THE FILES ARE CREATED?
  // DIFFERENTIATE BY UUID FOR UNIQUE HOME PAGES WITH SLUG= "/"

  return <div>hola</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        seosemPageCollection {
          items {
            slug
          }
        }
      }
    `,
  });

  const {
    seosemPageCollection: { items },
  } = data;
  
  const paths = items.map((value: any) => {
    // console.log("value: ", value)
    return {
      params: {
        slug: value.slug.substring(1).split("/"),// REMOVE FIRST SLASH AND CONVERT INTO AN ARRAY OF STRINGS FOR EACH LEVEL OF SLASHES --> IT NEEDS THIS WAY TO CREATE THE PAGE WITH
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  console.log("slug: ", slug)
  const parsedSlug = slug.join('/');

  try {
    const { data } = await client.query({
      query: gql`
        query{
          seosemPageCollection(limit: 1, where: { slug: "/${parsedSlug}" }) {
            items {
              applicationModeCollection{
                items {
                  ...ApplicationModeFragment
                }
              }
              slug
              modulesCollection {
                items {
                  ...ModuleBannerFragment
                  ...ModuleTabsInfoFragment
                }
              }
            }
          }
        }
        ${moduleBannerFragment}
        ${moduleTabsInfoFragment}
        ${applicationModeFragment}
      `,
    });
    
    const { seosemPageCollection: items } = data;
    console.log("items: ", items)

    return {
      props: {
        data: items,
      },
    };
  } catch (e: any) {
    return {
      props: {
        notFound: true,
      },
    };
  }
};

export default SeosemPage;

