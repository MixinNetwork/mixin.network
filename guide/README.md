# Guide

[[toc]]

## Using Markdown as a writing tool.

Make sure you already know Markdown well before reading this guide. 

If not, please learn [this Markdown tutorials](https://commonmark.org/help/) first.

## Using Git/Github to organize the content

We manage our code and content with [git](https://git-scm.com) and host it on github.

Git and github are tools designed for software developers, but all Mixin.Network members benefit greatly from them.

We strongly advise participants to learn how to use git and github.

There are numerous well-written tutorials and guides available to help you learn git and github, for example: 

- [Git and GitHub for Writers](https://www.udemy.com/course/git-and-github-for-writers/): a course at udemy. Not a software developer? Learn how to use Git and GitHub version control in a course specifically designed for writers.
- [How To Use Git to Manage Your Writing Project](https://www.digitalocean.com/community/tutorials/how-to-use-git-to-manage-your-writing-project) Version control isn’t just for code. It’s for anything you want to track, including content. Using Git to manage your next writing project gives you the ability to view multiple drafts at the same time, see differences between those drafts, and even roll back to a previous version. And if you’re comfortable doing so, you can then share your work with others on GitHub or other central Git repositories.
- [Writing a Book Using Git and Staying Organized on a Project](https://www.youtube.com/watch?v=coEq9RXJ1E8) Git can be intimidating for non-developers, even though it’s in use by businesses and organizations across the world.
- [How writers can get work done better with Git](https://opensource.com/article/19/4/write-git) If you're a writer, you could probably benefit from using Git. Learn how in our series about little-known uses of Git.

## Write blog posts, news, or essays

### Locate the file of the article.

The blog posts are organized in `/docs/blog/`, the news articles are organized in `/docs/news/`, the essays articles are organized in `/docs/{language}/essays/`.

The post or article should be grouped by a folder named the published year, and then placed in a folder named with the post or article's "short name."

For example, if you want to publish a blog post titled "Mixin Network Monthly Report — No. 40," you must first create a new markdown file called `README.md` at `/docs/blog/2022/mixin-network-monthly-report-no-40`.

- the "short name" is `mixin-network-monthly-report-no-40`
  - **please always using lower cases alphabets, numbers and '-' in the short name.**
- the publish year of the post is `2022`


### Frontmatter

The website uses `frontmatter` to store the metadata of pages.

Each page has a special combination of frontmatter fields.

The following fields will take effect in all types of pages, and they are all required for each page.

- title: the title of the page
- description: the description of the page.
- lastUpdated: the last updated datetime of the page

### Where should the images or other media files be saved?

It is common practice to include images or other media files in the post.

To do so, place it in the folder with the short name and insert images in the README.md using markdown syntax.

for example:

```
/docs/blog
  - /2022
    - /mixin-network-monthly-report-no-40
      - README.md
      - abc.png
```

You can use the following code to insert a picture named "abc.png" at the top of the README.md:

```markdown
![IMAGE DESCRIPTION](./abc.png)
```

## Update Index Page

The "Community Events" section on the index page contains a series of events that will be displayed as a slide animation on the index page.

To update them, you must edit `/docs/README.md`.

All of those entries are written at the beginning of README.md in "frontmatter" format:

```yaml
events:
  - title: MixPay, Crypto Payment Platform Powered by Mixin Network 
    url: https://google.com
    date: 2022/12/31
    category: Event
    image: https://pbs.twimg.com/media/FVjC1vQVUAA-qFl?format=jpg&name=large
  - title: Mixin Messenger supports to pin the bots on home page
    url: https://google.com
    date: 2022/12/02
    category: News
  ...
```

In which, 

The "title" is the event's title. The "url" is the event's link URL. The "date" indicates the event's publication date. The "category" refers to the event's category, which can be set to "Event" or "News." 

## Add tutorials to Developers page

Like the "Community Events", tutorials are organized at the "frontmatter" part, at the beginning of `/docs/developers/README.md`:

```yaml
tutorials:
  - title: A Quick Glance into Mixin Development
    url: https://gitpress.io/@lyric/a-quick-glance-into-mixin-development
  - title: Mixin Bot Development Tutorial 1, 2, 3
    url: "https://gitpress.io/t/Mixin%20Development"
  ...
```

In which,

The "title" is the tutorial's title. The "url" is the tutorial's link URL.

## Contribute to Ecosystem page

Please follow [these instructions](./dapps.md)

## for Translators

Please read [this document](./translate.md).


