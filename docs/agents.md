# Gemini Agents

This document provides a guide on how to use Gemini Agents to improve the quality of responses from the Gemini AI assistant.

## What are Gemini Agents?

Gemini Agents are pre-configured prompts that can be used to instruct the Gemini AI assistant on how to respond to a specific query. They are defined in markdown files located in the `/.gemini/gemini-agents` directory.

Each agent has a name and a description defined in the frontmatter of the markdown file. The content of the file is used as a system prompt to construct the response.

## How to use Gemini Agents

To use a Gemini Agent, you need to reference its filename in your prompt. For example, if you want to use the `web-dev-team` agent, you would include the following in your prompt:

"Using the web-dev-team, ..."

The Gemini AI assistant will then use the content of the `web-dev-team.md` file as a system prompt to construct the response.

## Available Agents

To see a list of available agents, you can check the `/.gemini/gemini-agents` directory. Each markdown file in this directory corresponds to an agent.

## Agent Teams

You can also utilize pre-configured teams of agents located in the `/.gemini/gemini-agents/teams` directory. To use a team, reference its filename in your prompt (e.g., "Using the web-dev-team, ...").
