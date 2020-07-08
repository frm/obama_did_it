# Obama Did It

It all happened on Reddit, [on a random thread](reddit-thread)...

In case the original gets taken down:

> /u/malkavich: Put President Obama's name there and Republicans would have lost
> their collective minds, but since its trump they are okay with his treason.
>
> /u/oJustSomeGuy: It would be pretty cool if there were a service to switch the
> names in the article from Trump to Obama. I'd love to send this article to the
> rest of my family with Obama's name in there. They'd truly flip the eff out.
> Once flip out is in full force let them know what the original article said.
> Amazing backtracking and excuses to follow
>
> me: Huh. I'd code that.

And here it is. It's a service that you can use to switch the names "Donald
Trump" and "Barack Obama" on arbitrary news articles.

You just need to prepend the URL with `obamadidit.netlify.app/r/` and it will
work!

For example, the [article from the original thread](original-article).

**NOTE: After 20s, the page will become blank with a text stating the article is
false. This is intentional as personal protection. I don't wish to be liable for
spreading fake news and I don't want this service to be used as a way to quickly
generate fake news either. I figured this would be a fair amount of time since
most people don't get past the headline or the first paragraph.**

## Contributing

Feel free to make a pull request or an issue. Current TODOs:

- [ ] Swap Mike Pence with Joe Biden
- [ ] Make the swap both ways. e.g: "Trump criticises Obama" becomes "Obama
  criticises Trump"

[reddit-thread]: https://old.reddit.com/r/worldnews/comments/hnh13d/trump_pushed_cia_to_give_intelligence_to_kremlin/fxbmblb/?context=10000
[original-article]: https://obamadidit.netlify.app/.netlify/functions/replace_html?url=https://www.justsecurity.org/71279/trump-pushed-cia-to-give-intelligence-to-kremlin-while-taking-no-action-against-russia-arming-taliban/
