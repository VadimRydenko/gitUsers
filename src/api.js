import React from 'react';
import {Octokit} from '@octokit/rest';

import {GIT_HUB_TOKEN} from './const';

const octokit = new Octokit({
  auth: GIT_HUB_TOKEN,
});

export const getUserList = async () => {
  const response = await octokit.request(
    'https://api.github.com/users?since=3&per_page=100',
  );
  return response.data;
};

export const getFollowers = async (userName) => {
  const response = await octokit.request(
    `https://api.github.com/users/${userName}/followers`,
  );
  return response.data;
};

