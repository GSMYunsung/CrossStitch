import { Octokit } from "octokit";

const OCTOKIT_TKOEN = process.env.REACT_APP_OCTOKIT_TKOEN;

if(!OCTOKIT_TKOEN){
  throw new Error("OCTOKIT_TKOEN IS NOT ALLOWED IN")
}

export const octokit = new Octokit({
    auth: OCTOKIT_TKOEN
  })