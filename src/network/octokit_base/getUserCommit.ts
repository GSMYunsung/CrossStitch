import { Endpoints } from "@octokit/types";
import { octokit } from "../octokit";


export const getRepository =  async (
    username : string = "" , 
    type : string = "" , 
    per_page : number = 0 , 
    page : number = 0 ) 
    : Promise<Endpoints['GET /users/{username}/repos']['response']['data']> => {
     const result = await octokit.rest.repos.listForUser({
        username: "GSMYunsung",
        type: "owner",
        per_page: 100,
        page: 1
     })

     const forkFilter = result.data.filter(repo => repo.fork !== true)

     console.log(forkFilter)

     return forkFilter;
}

export const getRepositoryCommit = async (name : string = "" , sinceDate = '') : Promise<Endpoints['GET /repos/{owner}/{repo}/commits']['response']['data']> => {
     const result = await octokit.rest.repos.listCommits({
        owner: "GSMYunsung",
        repo: name,
        per_page: 100,
        page: 1,
        since : sinceDate,
     })

     return result.data;
}

export const getUserCommits = async () =>{

    const sinceDate = new Date(new Date().setDate(new Date().getDate() - 21)).toISOString();

    const repos = await getRepository();
    const reposCommit = repos.map(async repo => await getRepositoryCommit(repo.name , sinceDate))

     const filteredCommits = Promise.all(reposCommit)
    .then(reposCommits => {
        const filteredCommits = reposCommits.filter(commitList => commitList.length > 0);

        return filteredCommits
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });

    return filteredCommits;

}