// mock search response for testing to avoid exhausting Google API quota

export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - mock",
        totalResults: "10200000",
        searchTerms: "mock",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "9b3b6e249a0376ad8",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - mock",
        totalResults: "10200000",
        searchTerms: "mock",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "9b3b6e249a0376ad8",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.689279,
    formattedSearchTime: "0.69",
    totalResults: "10200000",
    formattedTotalResults: "10,200,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title:
        "2022 NFL Mock Draft: Lions, Washington, Raiders target passers in ...",
      htmlTitle:
        "2022 NFL <b>Mock</b> Draft: Lions, Washington, Raiders target passers in ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMihgFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25mbC9kcmFmdC9uZXdzLzIwMjItbmZsLW1vY2stZHJhZnQtbGlvbnMtd2FzaGluZ3Rvbi1yYWlkZXJzLXRhcmdldC1wYXNzZXJzLWluLWEtd2lkZS1vcGVuLXF1YXJ0ZXJiYWNrLWNsYXNzL9IBigFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25mbC9kcmFmdC9uZXdzLzIwMjItbmZsLW1vY2stZHJhZnQtbGlvbnMtd2FzaGluZ3Rvbi1yYWlkZXJzLXRhcmdldC1wYXNzZXJzLWluLWEtd2lkZS1vcGVuLXF1YXJ0ZXJiYWNrLWNsYXNzL2FtcC8?oc=5",
      displayLink: "news.google.com",
      snippet:
        "7 hours ago ... It's never too early to put out a mock draft, right? (The other side of that argument, \nof course, is that it's always too early because, invariably, ...",
      htmlSnippet:
        "7 hours ago <b>...</b> It&#39;s never too early to put out a <b>mock</b> draft, right? (The other side of that argument, <br>\nof course, is that it&#39;s always too early because, invariably,&nbsp;...",
      cacheId: "-Y7X6JMYmyAJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMihgFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25mbC9kcmFmdC...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMihgFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25mbC9kcmFmdC...",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7B_PxgsJYuhkCJSPS32NG6VJRqt9912WDpGqlP_jEis8DyQjf8ytssFjF",
            width: "311",
            height: "162",
          },
        ],
        imageobject: [
          {
            width: "1200",
            url:
              "https://sportshub.cbsistatic.com/i/r/2021/05/03/dd52ef53-21f1-4268-95f7-bb8ac9b401e0/thumbnail/1200x675/f121d1485a3bfeaef88523c870868b44/samhowell.jpg",
            height: "675",
          },
          {
            width: "289",
            url:
              "https://sportsfly.cbsistatic.com/fly-255/bundles/sportsmediacss/images/core/cbssports-logo-60x289.png",
            height: "60",
          },
        ],
        person: [
          {
            name: "Ryan Wilson",
          },
        ],
        speakablespecification: [
          {
            cssselector: ".article-headline",
          },
        ],
        organization: [
          {
            name: "CBS Sports",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://sportsfly.cbsistatic.com/fly-255/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
            "twitter:card": "summary_large_image",
            "og:site_name": "CBSSports.com",
            "msapplication-tooltip":
              "CBSSports.com features live scoring and news for NFL football, MLB baseball, NBA basketball, NHL hockey, college basketball and football. CBSSports.com is also your source for fantasy sports news.",
            "og:description":
              "It's time for our first look at next year's draft, which comes less than 48 hours after the end of this year's draft",
            "twitter:creator": "@ryanwilsonCBS",
            "article:publisher": "https://www.facebook.com/cbssports",
            "twitter:image":
              "https://sportsfly.cbsistatic.com/fly-255/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
            "twitter:site": "@cbssports",
            "fb:admins": "100002967552623",
            "article:content_tier": "free",
            "twitter:account_id": "14885860",
            "msapplication-starturl": "https://www.cbssports.com/",
            "og:type": "article",
            "twitter:title":
              "2022 NFL Mock Draft: Lions, Washington, Raiders target passers in a wide-open quarterback class - CBSSports.com",
            "msapplication-window": "width=1024;height=768",
            handheldfriendly: "True",
            "og:title":
              "2022 NFL Mock Draft: Lions, Washington, Raiders target passers in a wide-open quarterback class",
            google: "notranslate",
            "fb:pages": "25902406772",
            "msapplication-navbutton-color": "#1483b2",
            "fb:app_id": "297742330311988",
            "apple-mobile-web-app-status-bar-style": "black",
            viewport:
              "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
            "twitter:description":
              "It's time for our first look at next year's draft, which comes less than 48 hours after the end of this year's draft",
            "apple-mobile-web-app-capable": "yes",
            mobileoptimized: "320",
            "og:url":
              "https://www.cbssports.com/nfl/draft/news/2022-nfl-mock-draft-lions-washington-raiders-target-passers-in-a-wide-open-quarterback-class/",
            "google-play-app": "com.handmark.sportcaster",
            "article:opinion": "false",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src:
              "https://sportsfly.cbsistatic.com/fly-255/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
          },
        ],
        article: [
          {
            articlebody:
              "It's never too early to put out a mock draft, right? (The other side of that argument, of course, is that it's always too early because, invariably, they're wrong -- but that's not the point....",
            keywords: "NFL Draft, NFL",
            datemodified: "2021-05-03 17:32:52",
            description:
              "It's time for our first look at next year's draft, which comes less than 48 hours after the end of this year's draft",
            headline:
              "2022 NFL Mock Draft: Lions, Washington, Raiders target passers in a wide-open quarterback class",
            url:
              "https://www.cbssports.com/nfl/draft/news/2022-nfl-mock-draft-lions-washington-raiders-target-passers-in-a-wide-open-quarterback-class/",
            datepublished: "2021-05-03 15:47:00",
            mainentityofpage:
              "https://www.cbssports.com//nfl/draft/news/2022-nfl-mock-draft-lions-washington-raiders-target-passers-in-a-wide-open-quarterback-class/",
            thumbnailurl:
              "https://sportshub.cbsistatic.com/i/r/2021/05/03/dd52ef53-21f1-4268-95f7-bb8ac9b401e0/thumbnail/1200x675/f121d1485a3bfeaef88523c870868b44/samhowell.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Daniel Jeremiah 2021 NFL mock draft 4.0: Broncos, Patriots trade ...",
      htmlTitle:
        "Daniel Jeremiah 2021 NFL <b>mock</b> draft 4.0: Broncos, Patriots trade ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMiYmh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9kYW5pZWwtamVyZW1pYWgtMjAyMS1uZmwtbW9jay1kcmFmdC00LTAtYnJvbmNvcy1wYXRyaW90cy10cmFkZS11cC1mb3ItcWJz0gFiaHR0cHM6Ly93d3cubmZsLmNvbS9fYW1wL2RhbmllbC1qZXJlbWlhaC0yMDIxLW5mbC1tb2NrLWRyYWZ0LTQtMC1icm9uY29zLXBhdHJpb3RzLXRyYWRlLXVwLWZvci1xYnM?oc=5",
      displayLink: "news.google.com",
      snippet:
        "4 days ago ... In his final mock of the 2021 NFL Draft's first round, Daniel Jeremiah projects the \nBroncos and Patriots will trade up to begin a new era at ...",
      htmlSnippet:
        "4 days ago <b>...</b> In his final <b>mock</b> of the 2021 NFL Draft&#39;s first round, Daniel Jeremiah projects the <br>\nBroncos and Patriots will trade up to begin a new era at&nbsp;...",
      cacheId: "GomKo0Nv_KEJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMiYmh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9kYW5pZWwtamVy...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMiYmh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9kYW5pZWwtamVy...",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvkszW1ShE3EUvNYIKhvugBXDcAi86B9o82plISObDXVl8GYKHf4k-2oO",
            width: "300",
            height: "168",
          },
        ],
        NewsArticle: [
          {
            datePublished: "2021-04-29T00:00:00Z",
            image:
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/tvpnap1bi51row1q94wc.jpg",
            itemtype: "http://schema.org/NewsArticle",
            keywords: "Mock Draft",
            articleBody:
              "With the 2021 NFL Draft set to kick off on Thursday in Cleveland at 8 p.m. ET, here's my final projection for Round 1.Want to create your own mock for the 2021 NFL Draft? Check out PFF’s draft simulator to play out countless scenarios for every team spanning all seven rounds.Follow Daniel Jeremiah on Twitter.",
            description:
              "In his final mock of the 2021 NFL Draft's first round, Daniel Jeremiah projects the Broncos and Patriots will trade up to begin a new era at quarterback.",
            dateModified: "2021-04-29T00:21:08Z",
            headline:
              "Daniel Jeremiah 2021 NFL mock draft 4.0: Broncos, Patriots trade up for QBs",
            articleSection: "Mock Draft",
            url:
              "https://www.nfl.com/news/daniel-jeremiah-2021-nfl-mock-draft-4-0-broncos-patriots-trade-up-for-qbs",
            thumbnailUrl:
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/tvpnap1bi51row1q94wc.jpg",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/tvpnap1bi51row1q94wc",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title":
              "Daniel Jeremiah 2021 NFL mock draft 4.0: Broncos, Patriots trade up for QBs",
            "og:site_name": "NFL.com",
            "og:title":
              "Daniel Jeremiah 2021 NFL mock draft 4.0: Broncos, Patriots trade up for QBs",
            "og:image:type": "image/jpeg",
            "og:description":
              "In his final mock of the 2021 NFL Draft's first round, Daniel Jeremiah projects the Broncos and Patriots will trade up to begin a new era at quarterback.",
            "twitter:image:src":
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/tvpnap1bi51row1q94wc",
            "twitter:site": "@",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "In his final mock of the 2021 NFL Draft's first round, Daniel Jeremiah projects the Broncos and Patriots will trade up to begin a new era at quarterback.",
            "og:locale": "en-US",
            "og:url":
              "https://www.nfl.com/news/daniel-jeremiah-2021-nfl-mock-draft-4-0-broncos-patriots-trade-up-for-qbs",
          },
        ],
        cse_image: [
          {
            src:
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/tvpnap1bi51row1q94wc",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "2021 NFL mock draft - NFL Nation reporters make first-round ...",
      htmlTitle:
        "2021 NFL <b>mock</b> draft - NFL Nation reporters make first-round ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMifGh0dHBzOi8vd3d3LmVzcG4uY29tL25mbC9kcmFmdDIwMjEvc3RvcnkvXy9pZC8zMTMxMDgyNC8yMDIxLW5mbC1tb2NrLWRyYWZ0LW5mbC1uYXRpb24tcmVwb3J0ZXJzLW1ha2UtZmlyc3Qtcm91bmQtcHJlZGljdGlvbnPSAYkBaHR0cHM6Ly93d3cuZXNwbi5jb20vbmZsL2RyYWZ0MjAyMS9zdG9yeS9fL2lkLzMxMzEwODI0LzIwMjEtbmZsLW1vY2stZHJhZnQtbmZsLW5hdGlvbi1yZXBvcnRlcnMtbWFrZS1maXJzdC1yb3VuZC1wcmVkaWN0aW9ucz9wbGF0Zm9ybT1hbXA?oc=5",
      displayLink: "news.google.com",
      snippet:
        "5 days ago ... NFL Nation reporters played general manager for the teams they cover and \nmade picks in a first-round mock draft. Five QBs came off the board ...",
      htmlSnippet:
        "5 days ago <b>...</b> NFL Nation reporters played general manager for the teams they cover and <br>\nmade picks in a first-round <b>mock</b> draft. Five QBs came off the board&nbsp;...",
      cacheId: "7pbblmzK3UUJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMifGh0dHBzOi8vd3d3LmVzcG4uY29tL25mbC9kcmFmdDIwMjEvc3...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMifGh0dHBzOi8vd3d3LmVzcG4uY29tL25mbC9kcmFmdDIwMjEvc3...",
      pagemap: {
        thumbnail: [
          {
            src:
              "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0613%2Fncf_mcshay_early_mock_cr_16x9.jpg",
            width: "1296",
            height: "729",
          },
        ],
        document: [
          {
            title:
              "2021 mock draft: NFL Nation reporters predict the first round",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0613%2Fncf_mcshay_early_mock_cr_16x9.jpg",
            "twitter:app:url:iphone":
              "sportscenter://x-callback-url/showStory?uid=31310824",
            "twitter:app:id:googleplay": "com.espn.score_center",
            "apple-itunes-app":
              "app-id=317469184, app-argument=sportscenter://x-callback-url/showStory?uid=31310824",
            "og:image:width": "1296",
            "twitter:card": "summary_large_image",
            "og:site_name": "ESPN.com",
            "twitter:url":
              "https://www.espn.com/nfl/draft2021/story/_/id/31310824/2021-nfl-mock-draft-nfl-nation-reporters-make-first-round-predictions",
            "twitter:app:name:googleplay": "ESPN",
            medium: "article",
            "twitter:app:id:iphone": "317469184",
            title:
              "2021 NFL mock draft - NFL Nation reporters make first-round predictions",
            "og:description":
              "NFL Nation reporters played general manager for the teams they cover and made picks in a first-round mock draft. Five QBs came off the board within the first 15 picks.",
            "twitter:site": "espn",
            news_keywords:
              "2021 nfl draft, nfl draft 2021, nfl draft, top prospects, NFL, draft, 2021, NFL Draft, Insider College Football, NFL",
            "article:content_tier": "free",
            "og:type": "article",
            "twitter:title":
              "2021 mock draft: NFL Nation reporters predict the first round",
            "og:title":
              "2021 mock draft: NFL Nation reporters predict the first round",
            "og:image:height": "729",
            "fb:pages": "104266592953439",
            "dc.date.issued": "2021-04-28T01:30:00Z",
            referrer: "origin-when-cross-origin",
            "fb:app_id": "116656161708917",
            "twitter:app:url:googleplay":
              "sportscenter://x-callback-url/showStory?uid=31310824",
            viewport: "initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
            "twitter:description":
              "NFL Nation reporters played general manager for the teams they cover and made picks in a first-round mock draft. Five QBs came off the board within the first 15 picks.",
            "og:url":
              "https://www.espn.com/nfl/draft2021/story/_/id/31310824/2021-nfl-mock-draft-nfl-nation-reporters-make-first-round-predictions",
            "twitter:app:name:iphone": "ESPN",
            "article:opinion": "false",
          },
        ],
        cse_image: [
          {
            src:
              "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0613%2Fncf_mcshay_early_mock_cr_16x9.jpg",
          },
        ],
        sitenavigationelement: [
          {
            name: "NFL",
            url: "NFL",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Charles Davis 2021 NFL mock draft 2.0: Ja'Marr Chase reunites with ...",
      htmlTitle:
        "Charles Davis 2021 NFL <b>mock</b> draft 2.0: Ja&#39;Marr Chase reunites with ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMiaWh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9jaGFybGVzLWRhdmlzLTIwMjEtbmZsLW1vY2stZHJhZnQtMi0wLWphLW1hcnItY2hhc2UtcmV1bml0ZXMtd2l0aC1qb2UtYnVycm93LWluLdIBaWh0dHBzOi8vd3d3Lm5mbC5jb20vX2FtcC9jaGFybGVzLWRhdmlzLTIwMjEtbmZsLW1vY2stZHJhZnQtMi0wLWphLW1hcnItY2hhc2UtcmV1bml0ZXMtd2l0aC1qb2UtYnVycm93LWluLQ?oc=5",
      displayLink: "news.google.com",
      snippet:
        "5 days ago ... In his final mock of the 2021 NFL Draft's first round, Charles Davis has the \nBengals drafting Joe Burrow's former teammate, Ja'Marr Chase, ...",
      htmlSnippet:
        "5 days ago <b>...</b> In his final <b>mock</b> of the 2021 NFL Draft&#39;s first round, Charles Davis has the <br>\nBengals drafting Joe Burrow&#39;s former teammate, Ja&#39;Marr Chase,&nbsp;...",
      cacheId: "ZLu9dV-q7QkJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMiaWh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9jaGFybGVzLWRhd...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMiaWh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9jaGFybGVzLWRhd...",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYBfMKBPmj_YR9fLbZeqrALmaIlV-OMecfSxefDuOVCcQoxoBNliH5X1I",
            width: "300",
            height: "168",
          },
        ],
        NewsArticle: [
          {
            datePublished: "2021-04-28T13:20:07Z",
            image:
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/gmrwvs5tujp0rclockr9.jpg",
            itemtype: "http://schema.org/NewsArticle",
            keywords: "Mock Draft",
            articleBody:
              "With the 2021 NFL Draft set to kick off on Thursday in Cleveland, here's my final projection for how the first round might look. As you can see, I went the mock-purist route and decided against forecasting any trades, but we all know there will be some swaps (although perhaps not as many as usual) once the picks start rolling in.Want to create your own mock for the 2021 NFL Draft? Check out PFF’s draft simulator to play out countless scenarios for every team spanning all seven rounds.",
            description:
              "In his final mock of the 2021 NFL Draft's first round, Charles Davis has the Bengals drafting Joe Burrow's former teammate, Ja'Marr Chase, at No. 5 overall, while Oregon's Penei Sewell slides out of the top 10.",
            dateModified: "2021-04-28T17:03:40Z",
            headline:
              "Charles Davis 2021 NFL mock draft 2.0: Ja'Marr Chase reunites with Joe Burrow in Cincinnati",
            articleSection: "Mock Draft",
            url:
              "https://www.nfl.com/news/charles-davis-2021-nfl-mock-draft-2-0-ja-marr-chase-reunites-with-joe-burrow-in-",
            thumbnailUrl:
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/gmrwvs5tujp0rclockr9.jpg",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/gmrwvs5tujp0rclockr9",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title":
              "Charles Davis 2021 NFL mock draft 2.0: Ja'Marr Chase reunites with Joe Burrow in Cincinnati",
            "og:site_name": "NFL.com",
            "og:title":
              "Charles Davis 2021 NFL mock draft 2.0: Ja'Marr Chase reunites with Joe Burrow in Cincinnati",
            "og:image:type": "image/jpeg",
            "og:description":
              "In his final mock of the 2021 NFL Draft's first round, Charles Davis has the Bengals drafting Joe Burrow's former teammate, Ja'Marr Chase, at No. 5 overall, while Oregon's Penei Sewell slides out of the top 10.",
            "twitter:image:src":
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/gmrwvs5tujp0rclockr9",
            "twitter:site": "@",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "In his final mock of the 2021 NFL Draft's first round, Charles Davis has the Bengals drafting Joe Burrow's former teammate, Ja'Marr Chase, at No. 5 overall, while Oregon's Penei Sewell slides out of the top 10.",
            "og:locale": "en-US",
            "og:url":
              "https://www.nfl.com/news/charles-davis-2021-nfl-mock-draft-2-0-ja-marr-chase-reunites-with-joe-burrow-in-",
          },
        ],
        cse_image: [
          {
            src:
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/gmrwvs5tujp0rclockr9",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "NFL Mock Draft 2022: Predicting where Spencer Rattler, Kedon ...",
      htmlTitle:
        "NFL <b>Mock</b> Draft 2022: Predicting where Spencer Rattler, Kedon ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMiY2h0dHBzOi8vd3d3LnNwb3J0aW5nbmV3cy5jb20vdXMvbmZsL25ld3MvbmZsLW1vY2stZHJhZnQtMjAyMi1wcmVkaWN0aW9ucy8xNTl5bXd3ODJyNXdyMTZ3ZGN0aXRqN3RrbdIBZ2h0dHBzOi8vd3d3LnNwb3J0aW5nbmV3cy5jb20vdXMvYW1wL25mbC9uZXdzL25mbC1tb2NrLWRyYWZ0LTIwMjItcHJlZGljdGlvbnMvMTU5eW13dzgycjV3cjE2d2RjdGl0ajd0a20?oc=5",
      displayLink: "news.google.com",
      snippet:
        "4 hours ago ... It's never too early to look ahead to the 2022 NFL Draft. Sporting News' first mock \ndraft of next year's class covers the entire first round, starting ...",
      htmlSnippet:
        "4 hours ago <b>...</b> It&#39;s never too early to look ahead to the 2022 NFL Draft. Sporting News&#39; first <b>mock</b> <br>\ndraft of next year&#39;s class covers the entire first round, starting&nbsp;...",
      cacheId: "-mSsvGcbxccJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMiY2h0dHBzOi8vd3d3LnNwb3J0aW5nbmV3cy5jb20vdXMvbmZsL2...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMiY2h0dHBzOi8vd3d3LnNwb3J0aW5nbmV3cy5jb20vdXMvbmZsL2...",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTcZq-irOx9o-RNmIzo7uplanm-RuqGrory-QdG5obYRWfGuOsvrpt3uprl",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            producer: "(SN illustration)",
            url:
              "https://images.daznservices.com/di/library/sporting_news/2/f9/2022-nfl-mock-draft_f98x6xwg511v10qaj9rgx12oa.jpg?t=476393145&w=500&quality=80",
          },
          {
            producer: "Getty Images",
            url:
              "https://images.daznservices.com/di/library/sporting_news/60/85/spencer-rattler-081818-getty-ftrjpg_1ks25mdzpdrvt19yzu0g5i99ug.jpg?t=165723178&w=500&quality=80",
          },
          {
            producer: "(Getty Images)",
            url:
              "https://images.daznservices.com/di/library/sporting_news/b5/29/desmond-ridder-101518-getty-ftr_1x3wsr6usniig1a024yh4kdb96.jpg?t=2038856750&w=500&quality=80",
          },
          {
            producer: "(Getty Images)",
            url:
              "https://images.daznservices.com/di/library/sporting_news/3c/a2/justyn-ross-122819-getty-ftr_puhtmhou425i1ch24nh7nkf7y.jpg?t=1340492607&w=500&quality=80",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://images.daznservices.com/di/library/sporting_news/2/f9/2022-nfl-mock-draft_f98x6xwg511v10qaj9rgx12oa.jpg?t=476393145&quality=100",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "NFL Mock Draft 2022: Predicting where Spencer Rattler, Kedon Slovis and other top prospects will go",
            "twitter:url":
              "https://www.sportingnews.com/us/nfl/news/nfl-mock-draft-2022-predictions/159ymww82r5wr16wdctitj7tkm",
            "og:title":
              "NFL Mock Draft 2022: Predicting where Spencer Rattler, Kedon Slovis and other top prospects will go",
            "og:app_id": "117854138246106",
            "og:description":
              "It's never too early to look ahead to the 2022 NFL Draft. Sporting News' first mock draft of next year's class covers the entire first round, starting with Oklahoma QB Spencer Rattler going No. 1 overall.",
            "twitter:creator": "@vinnieiyer",
            "twitter:image":
              "https://images.daznservices.com/di/library/sporting_news/2/f9/2022-nfl-mock-draft_f98x6xwg511v10qaj9rgx12oa.jpg?t=476393145&quality=100",
            "twitter:site": "@sportingnews",
            viewport:
              "user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1",
            "og:author": "https://www.facebook.com/byVinnieIyer",
            "twitter:description":
              "It's never too early to look ahead to the 2022 NFL Draft. Sporting News' first mock draft of next year's class covers the entire first round, starting with Oklahoma QB Spencer Rattler going No. 1 overall.",
            "og:locale": "en_US",
            "og:url":
              "https://www.sportingnews.com/us/nfl/news/nfl-mock-draft-2022-predictions/159ymww82r5wr16wdctitj7tkm",
          },
        ],
        cse_image: [
          {
            src:
              "https://images.daznservices.com/di/library/sporting_news/2/f9/2022-nfl-mock-draft_f98x6xwg511v10qaj9rgx12oa.jpg?t=476393145&quality=100",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "2022 NFL Mock Draft: Jason McIntyre on the case for JT Daniels ...",
      htmlTitle:
        "2022 NFL <b>Mock</b> Draft: Jason McIntyre on the case for JT Daniels ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMiWWh0dHBzOi8vd3d3LmZveHNwb3J0cy5jb20vc3Rvcmllcy9uZmwvMjAyMi1uZmwtbW9jay1kcmFmdC1vcmRlci1maXJzdC1waWNrLWphc29uLW1jaW50eXJl0gEA?oc=5",
      displayLink: "news.google.com",
      snippet:
        "23 hours ago ... The 2021 NFL Draft is in the books, so naturally, it's time for a way-too-early 2022 \nMock Draft. Why do we do this exercise? For starters, it's fun, ...",
      htmlSnippet:
        "23 hours ago <b>...</b> The 2021 NFL Draft is in the books, so naturally, it&#39;s time for a way-too-early 2022 <br>\n<b>Mock</b> Draft. Why do we do this exercise? For starters, it&#39;s fun,&nbsp;...",
      cacheId: "zxpfYxqeqToJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMiWWh0dHBzOi8vd3d3LmZveHNwb3J0cy5jb20vc3Rvcmllcy9uZmw...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMiWWh0dHBzOi8vd3d3LmZveHNwb3J0cy5jb20vc3Rvcmllcy9uZmw...",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGUY_5OcyAc1990bSy4kEvsWnuDMnGoDUh_noqOQ9RrVm_omIAyqALw",
            width: "150",
            height: "100",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#ffffff",
            "og:image":
              "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/05/1408/814/JMAC-Mock-Draft_050121.jpg?ve=1&tl=1",
            "theme-color": "#ffffff",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "2022 NFL Mock Draft: Jason McIntyre on the case for JT Daniels",
            "og:site_name": "FOX Sports",
            "og:title":
              "2022 NFL Mock Draft: Jason McIntyre on the case for JT Daniels",
            "og:description":
              "Could the former USC signal-caller go No. 1 in 2022? Jason McIntyre breaks down the entire first round in his early preview.",
            "twitter:creator": "@foxsports",
            "twitter:image":
              "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/05/1408/814/JMAC-Mock-Draft_050121.jpg?ve=1&tl=1",
            "fb:app_id": "380390622023704",
            "apple-mobile-web-app-status-bar-style": "black",
            "twitter:site": "@foxsports",
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description":
              "Could the former USC signal-caller go No. 1 in 2022? Jason McIntyre breaks down the entire first round in his early preview.",
            "og:locale": "en_US",
            "og:url":
              "https://www.foxsports.com/stories/nfl/2022-nfl-mock-draft-order-first-pick-jason-mcintyre",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src:
              "https://statics.foxsports.com/www.foxsports.com/content/uploads/2021/05/tyfryfogle-2022-mock-draft.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Peter Schrager 2021 NFL mock draft 3.0: Eagles, Patriots trade into ...",
      htmlTitle:
        "Peter Schrager 2021 NFL <b>mock</b> draft 3.0: Eagles, Patriots trade into ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMiYWh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9wZXRlci1zY2hyYWdlci0yMDIxLW5mbC1tb2NrLWRyYWZ0LTMtMC1lYWdsZXMtcGF0cmlvdHMtdHJhZGUtaW50by10b3AtMTDSAWFodHRwczovL3d3dy5uZmwuY29tL19hbXAvcGV0ZXItc2NocmFnZXItMjAyMS1uZmwtbW9jay1kcmFmdC0zLTAtZWFnbGVzLXBhdHJpb3RzLXRyYWRlLWludG8tdG9wLTEw?oc=5",
      displayLink: "news.google.com",
      snippet:
        "4 days ago ... In his final mock of the 2021 NFL Draft's first round, Peter Schrager sees two \nteams -- the Eagles and Patriots -- trading into the top 10. Does Bill ...",
      htmlSnippet:
        "4 days ago <b>...</b> In his final <b>mock</b> of the 2021 NFL Draft&#39;s first round, Peter Schrager sees two <br>\nteams -- the Eagles and Patriots -- trading into the top 10. Does Bill&nbsp;...",
      cacheId: "cEy93NytsicJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMiYWh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9wZXRlci1zY2hyYW...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMiYWh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9wZXRlci1zY2hyYW...",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToipKDQtWOxtyWbyslpB8oPhIUd47Hf9TZiJuqJpxVXR35YjyB4bzF3E3c",
            width: "300",
            height: "168",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/qtzo5q4lj7pynh7p3gy6",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title":
              "Peter Schrager 2021 NFL mock draft 3.0: Eagles, Patriots trade into top 10",
            "og:site_name": "NFL.com",
            "og:title":
              "Peter Schrager 2021 NFL mock draft 3.0: Eagles, Patriots trade into top 10",
            "og:image:type": "image/jpeg",
            "og:description":
              "In his final mock of the 2021 NFL Draft's first round, Peter Schrager sees two teams -- the Eagles and Patriots -- trading into the top 10. Does Bill Belichick have his eyes on a quarterback?",
            "twitter:image:src":
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/qtzo5q4lj7pynh7p3gy6",
            "twitter:site": "@",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "In his final mock of the 2021 NFL Draft's first round, Peter Schrager sees two teams -- the Eagles and Patriots -- trading into the top 10. Does Bill Belichick have his eyes on a quarterback?",
            "og:locale": "en-US",
            "og:url":
              "https://www.nfl.com/news/peter-schrager-2021-nfl-mock-draft-3-0-eagles-patriots-trade-into-top-10",
          },
        ],
        cse_image: [
          {
            src:
              "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/qtzo5q4lj7pynh7p3gy6",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "golang/mock: GoMock is a mocking framework for the Go ... - GitHub",
      htmlTitle:
        "golang/mock: GoMock is a mocking framework for the Go ... - GitHub",
      link: "https://code.google.com/p/gomock/",
      displayLink: "code.google.com",
      snippet:
        "The mockgen command is used to generate source code for a mock class given \na Go source file containing interfaces to be mocked. It supports the following flags\n:.",
      htmlSnippet:
        "The mockgen command is used to generate source code for a <b>mock</b> class given <br>\na Go source file containing interfaces to be mocked. It supports the following flags<br>\n:.",
      cacheId: "WyqAGu_7cFYJ",
      formattedUrl: "https://code.google.com/p/gomock/",
      htmlFormattedUrl: "https://code.google.com/p/go<b>mock</b>/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTrwSllnkPEwLUW0gTgaScqz8duXUPSrNYaNh6acoOY4dTbvHJg3Ef-VNI",
            width: "225",
            height: "225",
          },
        ],
        softwaresourcecode: [
          {
            license: "LICENSE",
            author: "golang",
            name: "mock",
            text:
              "gomock gomock is a mocking framework for the Go programming language. It integrates well with Go's built-in testing package, but can be used in other contexts too. Installation Once you have...",
          },
        ],
        metatags: [
          {
            "apple-itunes-app": "app-id=1477376905",
            "og:image":
              "https://opengraph.githubassets.com/6e1aee901afb628f3916db4abf9363132d183857351f95953172de7f0fab3601/golang/mock",
            "twitter:card": "summary_large_image",
            "og:image:width": "1200",
            "theme-color": "#1e2327",
            "og:site_name": "GitHub",
            "octolytics-event-url":
              "https://collector.githubapp.com/github-external/browser_event",
            "hovercard-subject-tag": "repository:37334619",
            "html-safe-nonce":
              "b63778b8e5efb06ea109865c966183369661ca849526759a5d0b562020430484",
            "expected-hostname": "github.com",
            "octolytics-app-id": "github",
            "og:description":
              "GoMock is a mocking framework for the Go programming language. - golang/mock",
            "browser-errors-url":
              "https://api.github.com/_private/browser/errors",
            "octolytics-dimension-user_login": "golang",
            hostname: "github.com",
            "twitter:site": "@github",
            "browser-stats-url":
              "https://api.github.com/_private/browser/stats",
            "visitor-payload":
              "eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiJCRDg4OjNDRjk6ODJDRThBRjpCQUY0MkU1OjYwOEZCRjI4IiwidmlzaXRvcl9pZCI6IjY0MzY1MjMzMjM4MTU4NzAyNDgiLCJyZWdpb25fZWRnZSI6ImlhZCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==",
            "github-keyboard-shortcuts": "repository",
            "octolytics-dimension-repository_id": "37334619",
            "octolytics-dimension-repository_network_root_nwo": "golang/mock",
            "enabled-features":
              "MARKETPLACE_PENDING_INSTALLATIONS,AUTOCOMPLETE_EMOJIS_IN_MARKDOWN_EDITOR,ACTIONS_CONCURRENCY_UI",
            "twitter:title": "golang/mock",
            "og:image:alt":
              "GoMock is a mocking framework for the Go programming language. - golang/mock",
            "og:type": "object",
            "optimizely-datafile":
              '{"version": "4", "rollouts": [], "typedAudiences": [], "anonymizeIP": true, "projectId": "16737760170", "variables": [], "featureFlags": [], "experiments": [{"status": "Running", "audienceIds": [], "variations": [{"variables": [], "id": "20236992340", "key": "usd"}, {"variables": [], "id": "20184442182", "key": "localized_currency"}], "id": "20233233507", "key": "local_currency_pricing", "layerId": "20212472765", "trafficAllocation": [{"entityId": "20184442182", "endOfRange": 5000}, {"entityId": "20236992340", "endOfRange": 10000}], "forcedVariations": {"667685045.1617740930": "localized_currency"}}], "audiences": [{"conditions": "[\\"or\\", {\\"match\\": \\"exact\\", \\"name\\": \\"$opt_dummy_attribute\\", \\"type\\": \\"custom_attribute\\", \\"value\\": \\"$opt_dummy_value\\"}]", "id": "$opt_dummy_audience", "name": "Optimizely-Generated Audience for Backwards Compatibility"}], "groups": [], "attributes": [{"id": "16822470375", "key": "user_id"}, {"id": "17143601254", "key": "spammy"}, {"id": "18175660309", "key": "organizat',
            "og:title": "golang/mock",
            "og:image:height": "600",
            "visitor-hmac":
              "49054927ecc9dd1ac7b65e84f36a687675f1daa06f32454d59c218183188048d",
            "request-id": "BD88:3CF9:82CE8AF:BAF42E5:608FBF28",
            "analytics-location": "/<user-name>/<repo-name>",
            "color-scheme": "light dark",
            "octolytics-dimension-repository_is_fork": "false",
            "go-import":
              "github.com/golang/mock git https://github.com/golang/mock.git",
            "browser-optimizely-client-errors-url":
              "https://api.github.com/_private/browser/optimizely_client/errors",
            "twitter:image:src":
              "https://opengraph.githubassets.com/6e1aee901afb628f3916db4abf9363132d183857351f95953172de7f0fab3601/golang/mock",
            "octolytics-dimension-user_id": "4314092",
            "octolytics-dimension-repository_public": "true",
            "fb:app_id": "1401488693436528",
            "octolytics-dimension-repository_network_root_id": "37334619",
            "octolytics-dimension-repository_nwo": "golang/mock",
            viewport: "width=device-width",
            "twitter:description":
              "GoMock is a mocking framework for the Go programming language. - golang/mock",
            "octolytics-host": "collector.githubapp.com",
            "og:url": "https://github.com/golang/mock",
          },
        ],
        cse_image: [
          {
            src: "https://avatars.githubusercontent.com/u/9932238?s=64&v=4",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "2022 NFL Mock Draft: B/R's Way-Too-Early Predictions | Bleacher ...",
      htmlTitle:
        "2022 NFL <b>Mock</b> Draft: B/R&#39;s Way-Too-Early Predictions | Bleacher ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMiXWh0dHBzOi8vYmxlYWNoZXJyZXBvcnQuY29tL2FydGljbGVzLzI5NDIxOTAtMjAyMi1uZmwtbW9jay1kcmFmdC1icnMtd2F5LXRvby1lYXJseS1wcmVkaWN0aW9uc9IBbWh0dHBzOi8vc3luZGljYXRpb24uYmxlYWNoZXJyZXBvcnQuY29tL2FtcC8yOTQyMTkwLTIwMjItbmZsLW1vY2stZHJhZnQtYnJzLXdheS10b28tZWFybHktcHJlZGljdGlvbnMuYW1wLmh0bWw?oc=5",
      displayLink: "news.google.com",
      snippet:
        "9 hours ago ... We might as well mock yet another wide receiver to Green Bay in hopes of Aaron \nRodgers getting top-shelf help. Arkansas' Treylon Burks is a ...",
      htmlSnippet:
        "9 hours ago <b>...</b> We might as well <b>mock</b> yet another wide receiver to Green Bay in hopes of Aaron <br>\nRodgers getting top-shelf help. Arkansas&#39; Treylon Burks is a&nbsp;...",
      cacheId: "rOuXCBbQF_kJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMiXWh0dHBzOi8vYmxlYWNoZXJyZXBvcnQuY29tL2FydGljbGVzLz...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMiXWh0dHBzOi8vYmxlYWNoZXJyZXBvcnQuY29tL2FydGljbGVzLz...",
      pagemap: {
        thumbnail: [
          {
            src:
              "https://img.bleacherreport.net/img/slides/photos/004/453/314/d9a955fd52b167af9e3977bec8706a96_crop_exact.jpg?w=1200&h=1200&q=75",
          },
        ],
        NewsArticle: [
          {
            datePublished: "2021-05-03T09:23:18-04:00",
            itemtype: "http://schema.org/NewsArticle",
            keywords:
              "NFL_Draft,NFL,NFL_Mock_Draft,Preview_Prediction,Spencer_Rattler,Justyn_Ross,SBS,Chris_Olave",
            isFamilyFriendly: "http://schema.org/True",
            description:
              "There's more to see than can ever be seen     More to do than can ever be done     There's far too much to take in here     More to find than can ever be found     The  NFL  draft serves as the lifeblood for professional football...",
            inLanguage: "English",
            dateModified: "2021-05-03T11:16:48-04:00",
            mainEntityOfPage:
              "There's more to see than can ever be seen     More to do than can ever be done     There's far too much to take in here     More to find than can ever be found     The  NFL  draft serves as the lifeblood for professional football...",
            headline: "2022 NFL Mock Draft: B/R's Way-Too-Early Predictions",
            thumbnailUrl:
              "https://img.bleacherreport.net/img/slides/photos/004/453/314/d9a955fd52b167af9e3977bec8706a96_crop_exact.jpg?w=900&h=600&q=75",
          },
        ],
        BreadcrumbList: [
          {
            itemtype: "http://schema.org/BreadcrumbList",
          },
        ],
        imageobject: [
          {
            citation: "Michael Dwyer/Associated Press",
          },
          {
            citation: "Michael Ainsworth/Associated Press",
          },
          {
            citation: "Tony Avelar/Associated Press",
          },
          {
            citation: "John Amis/Associated Press",
          },
          {
            citation: "Vasha Hunt/Associated Press",
          },
          {
            citation: "Tony Tribble/Associated Press",
          },
          {
            citation: "Marta Lavandier/Associated Press",
          },
          {
            citation: "Michael Dwyer/Associated Press",
          },
          {
            citation: "Paul Sancya/Associated Press",
          },
          {
            citation: "Wilfredo Lee/Associated Press",
          },
          {
            citation: "Ben Margot/Associated Press",
          },
          {
            citation: "Sam Craft/Associated Press",
          },
          {
            citation: "Brynn Anderson/Associated Press",
          },
          {
            citation: "Butch Dill/Associated Press",
          },
          {
            citation: "Matt Stamey/Associated Press",
          },
          {
            citation: "Sue Ogrocki/Associated Press",
          },
          {
            citation: "Bruce Newman/Associated Press",
          },
          {
            citation: "Jay LaPrete/Associated Press",
          },
          {
            citation: "John Raoux/Associated Press",
          },
          {
            citation: "Ashley Landis/Associated Press",
          },
          {
            citation: "Michael Woods/Associated Press",
          },
          {
            citation: "Barry Reeger/Associated Press",
          },
          {
            citation: "Paul Sancya/Associated Press",
          },
          {
            citation: "Butch Dill/Associated Press",
          },
          {
            citation: "Chris O'Meara/Associated Press",
          },
          {
            citation: "Michael Woods/Associated Press",
          },
          {
            citation: "Carlos Osorio/Associated Press",
          },
          {
            citation: "Bryan Woolston/Associated Press",
          },
          {
            citation: "John Minchillo/Associated Press",
          },
          {
            citation: "Charlie Neibergall/Associated Press",
          },
          {
            citation: "John Bazemore/Associated Press",
          },
          {
            citation: "Al Goldis/Associated Press",
          },
          {
            citation: "AJ Mast/Associated Press",
          },
        ],
        metatags: [
          {
            "p:domain_verify": "0c768466449ebb550411234d6d4ffc30",
            "twitter:app:id:googleplay":
              "com.bleacherreport.android.teamstream",
            "og:image":
              "https://img.bleacherreport.net/img/slides/photos/004/453/314/d9a955fd52b167af9e3977bec8706a96_crop_exact.jpg?w=1200&h=1200&q=75",
            "twitter:app:url:iphone":
              "teamstream://article/bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "theme-color": "#000",
            "twitter:card": "summary_large_image",
            "og:site_name": "Bleacher Report",
            "twitter:url":
              "https://bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "twitter:app:url:ipad":
              "teamstream://article/bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "al:android:package": "com.bleacherreport.android.teamstream",
            "al:ipad:app_store_id": "484725748",
            "twitter:app:name:googleplay": "Bleacher Report",
            "twitter:app:id:iphone": "418075935",
            "og:description":
              "There's more to see than can ever be seen     More to do than can ever be done     There's far too much to take in here     More to find than can ever be found     The  NFL  draft serves as the lifeblood for professional football...",
            "article:publisher": "https://www.facebook.com/bleacherreport",
            "twitter:image":
              "https://img.bleacherreport.net/img/slides/photos/004/453/314/d9a955fd52b167af9e3977bec8706a96_crop_exact.jpg?w=1200&h=1200&q=75",
            "al:iphone:app_name": "Bleacher Report",
            "twitter:site": "@bleacherreport",
            pubdate: "2021-05-03T09:23:18-04:00",
            "og:type": "article",
            thumbnail:
              "https://img.bleacherreport.net/img/slides/photos/004/453/314/d9a955fd52b167af9e3977bec8706a96_crop_exact.jpg?w=1200&h=1200&q=75",
            "twitter:title":
              "2022 NFL Mock Draft: B/R's Way-Too-Early Predictions",
            "msvalidate.01": "7A63840181953B2A5A1FEA25FB45A991",
            author: "Brent Sobleski",
            "og:title": "2022 NFL Mock Draft: B/R's Way-Too-Early Predictions",
            "twitter:app:id:ipad": "484725748",
            "twitter:widgets:new-embed-design": "on",
            "al:web:url":
              "https://bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "al:iphone:url":
              "teamstream://article/bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "al:android:url":
              "https://bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "aol-te-auth": "1c424580-0f86-4d9b-88b2-bc8c0d029d4c",
            blitz: "mu-6e4ce5cd-57f20d11-7c0ecee9-d55c79e2",
            "fb:app_id": "135174055162",
            "twitter:app:url:googleplay":
              "https://bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "al:ipad:url":
              "teamstream://article/bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "twitter:app:name:ipad": "Bleacher Report",
            viewport: "width=device-width, initial-scale=1",
            "twitter:description":
              "There's more to see than can ever be seen     More to do than can ever be done     There's far too much to take in here     More to find than can ever be found     The  NFL  draft serves as the lifeblood for professional football...",
            "al:iphone:app_store_id": "418075935",
            "al:ipad:app_name": "Bleacher Report",
            "og:locale": "en_US",
            "og:url":
              "https://bleacherreport.com/articles/2942190-2022-nfl-mock-draft-brs-way-too-early-predictions",
            "al:android:app_name": "Bleacher Report",
            "twitter:app:name:iphone": "Bleacher Report",
          },
        ],
        cse_image: [
          {
            src:
              "https://img.bleacherreport.net/img/slides/photos/004/453/314/d9a955fd52b167af9e3977bec8706a96_crop_exact.jpg?w=1200&h=1200&q=75",
            width: "225",
            type: "1",
            height: "225",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "2021 NFL Mock Draft: Bears trade up to capitalize on Justin Fields ...",
      htmlTitle:
        "2021 NFL <b>Mock</b> Draft: Bears trade up to capitalize on Justin Fields ...",
      link:
        "https://news.google.com/__i/rss/rd/articles/CBMiiAFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25mbC9kcmFmdC9uZXdzLzIwMjEtbmZsLW1vY2stZHJhZnQtYmVhcnMtdHJhZGUtdXAtdG8tY2FwaXRhbGl6ZS1vbi1qdXN0aW4tZmllbGRzLWZhbGwtcGF0cmlvdHMtbW92ZS11cC1mb3ItcWIv0gGMAWh0dHBzOi8vd3d3LmNic3Nwb3J0cy5jb20vbmZsL2RyYWZ0L25ld3MvMjAyMS1uZmwtbW9jay1kcmFmdC1iZWFycy10cmFkZS11cC10by1jYXBpdGFsaXplLW9uLWp1c3Rpbi1maWVsZHMtZmFsbC1wYXRyaW90cy1tb3ZlLXVwLWZvci1xYi9hbXAv?oc=5",
      displayLink: "news.google.com",
      snippet:
        "6 days ago ... Mock drafts are hard to do. I mean, no, mocking players to certain teams on my \nlaptop is not exactly breaking rocks. I don't deserve a medal.",
      htmlSnippet:
        "6 days ago <b>...</b> <b>Mock</b> drafts are hard to do. I mean, no, <b>mocking</b> players to certain teams on my <br>\nlaptop is not exactly breaking rocks. I don&#39;t deserve a medal.",
      cacheId: "RGm4dCYkJ4UJ",
      formattedUrl:
        "https://news.google.com/__.../ CBMiiAFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25mbC9kcmFmdC...",
      htmlFormattedUrl:
        "https://news.google.com/__.../ CBMiiAFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25mbC9kcmFmdC...",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rKAgiX4B0dB9LxnhoSm5ZtyK8yPpytScsZdAOFAIRA7-JsBGoYXdMAY",
            width: "311",
            height: "162",
          },
        ],
        imageobject: [
          {
            width: "1200",
            url:
              "https://sportshub.cbsistatic.com/i/r/2020/12/30/dfefd14b-e5af-4a6a-b550-46b7bd484837/thumbnail/1200x675/89aa918228329d7150be74fcdecb967d/justin-fields.jpg",
            height: "675",
          },
          {
            width: "289",
            url:
              "https://sportsfly.cbsistatic.com/fly-253/bundles/sportsmediacss/images/core/cbssports-logo-60x289.png",
            height: "60",
          },
        ],
        person: [
          {
            name: "Jonathan Jones",
          },
        ],
        speakablespecification: [
          {
            cssselector: ".article-headline",
          },
        ],
        organization: [
          {
            name: "CBS Sports",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://sportsfly.cbsistatic.com/fly-253/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
            "twitter:card": "summary_large_image",
            "og:site_name": "CBSSports.com",
            "msapplication-tooltip":
              "CBSSports.com features live scoring and news for NFL football, MLB baseball, NBA basketball, NHL hockey, college basketball and football. CBSSports.com is also your source for fantasy sports news.",
            "og:description":
              "Bears look to fix past mistakes made at quarterback by moving up for Fields",
            "twitter:creator": "@cbssports",
            "article:publisher": "https://www.facebook.com/cbssports",
            "twitter:image":
              "https://sportsfly.cbsistatic.com/fly-253/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
            "twitter:site": "@cbssports",
            "fb:admins": "100002967552623",
            "article:content_tier": "free",
            "twitter:account_id": "14885860",
            "msapplication-starturl": "https://www.cbssports.com/",
            "og:type": "article",
            "twitter:title":
              "2021 NFL Mock Draft: Bears trade up to capitalize on Justin Fields' fall, Patriots move up for quarterback - CBSSports.com",
            "msapplication-window": "width=1024;height=768",
            handheldfriendly: "True",
            "og:title":
              "2021 NFL Mock Draft: Bears trade up to capitalize on Justin Fields' fall, Patriots move up for quarterback",
            google: "notranslate",
            "fb:pages": "25902406772",
            "msapplication-navbutton-color": "#1483b2",
            "fb:app_id": "297742330311988",
            "apple-mobile-web-app-status-bar-style": "black",
            viewport:
              "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
            "twitter:description":
              "Bears look to fix past mistakes made at quarterback by moving up for Fields",
            "apple-mobile-web-app-capable": "yes",
            mobileoptimized: "320",
            "og:url":
              "https://www.cbssports.com/nfl/draft/news/2021-nfl-mock-draft-bears-trade-up-to-capitalize-on-justin-fields-fall-patriots-move-up-for-quarterback/",
            "google-play-app": "com.handmark.sportcaster",
            "article:opinion": "false",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src:
              "https://sportsfly.cbsistatic.com/fly-253/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
          },
        ],
        article: [
          {
            articlebody:
              "Mock drafts are hard to do.I mean, no, mocking players to certain teams on my laptop is not exactly breaking rocks. I don't deserve a medal. (Maybe Ryan Wilson does now that he's done 34 mocks...",
            keywords: "NFL Draft, NFL",
            datemodified: "2021-04-27 21:53:32",
            description:
              "Bears look to fix past mistakes made at quarterback by moving up for Fields",
            headline:
              "2021 NFL Mock Draft: Bears trade up to capitalize on Justin Fields' fall, Patriots move up for quarterback",
            url:
              "https://www.cbssports.com/nfl/draft/news/2021-nfl-mock-draft-bears-trade-up-to-capitalize-on-justin-fields-fall-patriots-move-up-for-quarterback/",
            datepublished: "2021-04-27 21:53:00",
            mainentityofpage:
              "https://www.cbssports.com//nfl/draft/news/2021-nfl-mock-draft-bears-trade-up-to-capitalize-on-justin-fields-fall-patriots-move-up-for-quarterback/",
            thumbnailurl:
              "https://sportshub.cbsistatic.com/i/r/2020/12/30/dfefd14b-e5af-4a6a-b550-46b7bd484837/thumbnail/1200x675/89aa918228329d7150be74fcdecb967d/justin-fields.jpg",
          },
        ],
      },
    },
  ],
};
