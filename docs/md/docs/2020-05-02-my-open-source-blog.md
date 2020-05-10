# Creating my open source dev blog

## tl;dr

In this blog post, I explain why I chose to create my dev blog in a fully open source manner and all the advantages with this approach.
I planned creating my own developer blog for a while but wasn't satisfied with the common setups normally chosen.
As an engineer, I preferred to treat my blog as yet another software project and therefore had the following requirements:
* manage everything (really, everything) in a single place - GitHub
* the blog management interface should be done solely using git:
  * git pull = get the latest version of the blog
  * merge to master = publish a new version of the website
* be able to run the blog locally and see how it looks before publishing
* maximum Markdown as possible, ideally no CSS and html work. I admit, I'm not a CSS fan :)
* the entire stack should be open source
* both the website's UI and the tech setup should be as simple as possible

![less is more](/docs/assets/my-open-source-blog/less_is_more.png)

## The Setup

### Source Code Management
Per the requirements I set, GitHub was a clear choice as my source code management. You can see the blog's repo [here](https://github.com/shaimendel/dev-blog).
<br>
Nothing special to add here :)

### Static Pages Framework
There are lots of open source site generators, [Gatsby](https://www.gatsbyjs.org/) and [Hexo](https://hexo.io/) to name a few.<br>
I eventually chose [CodeDoc](https://codedoc.cc/) as the site generator for a few reasons:
* I saw it in a Reddit and thought it would be nice to give a new framework a shot :)
* it is really simple to use
* the look and feel is very unique and simple, I looked for the simplest design as possible
* it comes with some useful builtin features out of the box:
  * dark mode
  * Markdown-based menu (table of contents) on the left
  * a small page-map on the bottom-right

### Local Debugging
[CodeDoc](https://codedoc.cc/)'s CLI has a `codedoc serve` command that automatically monitors all the local files, converts the relevant Markdown files to html and updates the local server, so `http://localhost:3000` always has the updated version.<br>
This allows me to see how the final website looks like during "development" (adding more content).

### Publishing Website On Merge
This is exactly the purpose of GitHub Pages! I just configured my repository to publish my master branch as GitHub Pages and that was basically it. so simple and efficient!

### Versioning
I used GitHub Actions to call Semantic Release upon merge to master. If you are interested - [here is the action configuration](https://github.com/shaimendel/dev-blog/blob/master/.github/workflows/ci.yaml).<br>
This automatically creates a GitHub release and a nice and clear release notes, according to my commit messages.
Feel free to see all of the [blog's releases](https://github.com/shaimendel/dev-blog/releases).

## Open Source Approach Advantages

This open source approach supplies some decent advantages, here are a few:

### Ease Of Management
This approach makes the website development cycle a regular software development cycle, making it super easy to maintain:
* local development in a code editor (for writing Markdown files and edit package.json mostly)
* local debugging using `codedoc serve` -> I put it as my `npm start` command
* build the website using `codedoc build` -> I put it as my `npm run build` command
* merge code to master in order to deploy
* The Semantic Release versioning gives the owner (and everyone who look at the repository :)) a clear view of what each website version contained
* if bad things happen and the website doesn't look as expected - reverting a commit will do the job
* opening a PR is equivalent to adding new blog content - even this blog post was merged [in a PR](https://github.com/shaimendel/dev-blog/pull/2)!

### Security
I added Snyk's vulnerability test badge at the page header, so every viewer can see the security status of the blog:<br>
![snyk badge](/docs/assets/my-open-source-blog/snyk_vulns.png)

## Summary
I hope I made it clear why I chose to build this blog the way I did, feel free to reach out for any questions!
This blog post will be followed by a more technical post about the CI/CD process of this blog.
