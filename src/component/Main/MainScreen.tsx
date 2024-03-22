import React from 'react';
import { Octokit } from 'octokit'
import { octokit } from '../../network/octokit';
import { getRepository, getRepositoryCommit, getUserCommits } from '../../network/octokit_base/getUserCommit';

export default function MainScreen() {

    return (
        <div>
            <button onClick={getUserCommits}>Get Repository</button>
        </div>
    );
}