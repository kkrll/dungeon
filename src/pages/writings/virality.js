import React from "react"
import Layout from "../../components/layout"

import {
  Paragraph,
  Title,
  List,
  Divider,
} from "../../components/articleTypography"
import { Box } from "../../components/Box"
import ArticleHero from "../../components/article/articleHero"
import WritingList from "../../components/WritingList"

const ArticleViralityPage = () => {
  return (
    <Layout>
      <ArticleHero
        title="Some words on Virality"
        subtitle="It started as an attempt to add a bit of structure and ended up as
       an actionable instrument. Used as an ideation tool, it helped us to
       raise conversion addressing the users hidden from our sight."
        date="some date"
        image="/articles/virality/virality_hero.png"
      />
      <Box
        css={{
          width: "$full",
          maxWidth: "$max",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          backgroundColor: "$background_primary",
          padding: "$64",
          margin: "0 auto",

          "@bp2": {
            padding: "$64 $32",
          },
        }}
      >
        <Box
          css={{
            maxWidth: "640px",
            backgroundColor: "$background_primary",
          }}
        >
          <Box css={{ marginBottom: "$48" }}>
            <Title level="3" as="h2">
              What is virality technically?
            </Title>
            <Paragraph>
              It can be put as audience-driven growth - a company grows because
              each new user begets more users. Quite a simple concept to
              explain, much harder to achieve. Adam L. Penenberg, in his book
              called “Viral Loop”, illustrates it with the use of Viral
              Coefficient - the ratio between the number of acquired users to
              the users referred by them:
            </Paragraph>
            <Paragraph>
              So you can see - if, in average, ten customers start to bring more
              than ten others, you begin to grow exponentially and become viral.
              Otherwise, you are striving to the plain and have to rely on the
              acquisition effort only. Viral product continues to grow the
              audience without extra input. It does not mean you should stop all
              the marketing spending or any activity; it means you are in a
              booster mode and can make more use of it by acting cleverly.
            </Paragraph>
          </Box>

          {/* Virality types section */}

          <Box
            css={{
              marginBottom: "$32",
            }}
          >
            <Title level="3" as="h2">
              Virality types
            </Title>
            <Paragraph>
              Your users are bringing new clients to you in different ways -
              they can spread the word intentionally or not, impose someone to
              join or just arose interest:
            </Paragraph>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Box
              as={"img"}
              src={"/articles/virality/word_of_mouth.png"}
              alt={"Word of mouth virality"}
              css={{
                width: "640px",
              }}
            />
            <Title level="4" as="h3">
              1. Word of mouth virality
            </Title>
            <Paragraph>
              That is something most of us think of hearing the word "Virality".
              It usually happens when the product is so exciting that users
              mention it to everyone around. Or it makes some of their routines
              much easier and becomes one of those. Some examples:
            </Paragraph>
            <List>
              <li>"Google it!"</li>
              <li>“Let’s switch to Notion/Next.js/Figma”</li>
              <li>"Looking where to stay? Check Airbnb"</li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Box
              as={"img"}
              src={"/articles/virality/demonstration.png"}
              alt={"Demonstration virality"}
              css={{
                width: "640px",
              }}
            />
            <Title level="4" as="h3">
              2. Demonstration virality
            </Title>
            <Paragraph>
              In this case users share something not by telling but by showing,
              provoking interest in the instrument. By showing the results of
              usage you basically provide a sample - share a Pintrest moodboard,
              add some filters and post vacation photos or find a restaurant
              nearby quicker then anybody else. So your clients may get some
              "How did you..?" questions. Some more examples:
            </Paragraph>
            <List>
              <li>"Made with Squarespace/Readymag/Tilda..."</li>
              <li>
                "- How did you get there so quickly? - I've used Uber/Lime/"
              </li>
              <li>
                "- Great slides, when did you find time to do that?! - I've used
                Dropbox Paper / Canva / Pitch"
              </li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Box
              as={"img"}
              src={"/articles/virality/outbreak.png"}
              alt={"Outbreak virality"}
              css={{
                width: "640px",
              }}
            />
            <Title level="4" as="h3">
              3. Outbreak virality
            </Title>
            <Paragraph>
              Some products seem to be a must today - we communicate online,
              read news, consume content or shop online and our habits list
              continues to evolve. At some point, we start to notice that
              everyone is using some app or see it on the news, so it looks like
              we should at least take a look. This is the case of outbreak
              virality.
            </Paragraph>
            <List>
              <li>Clubhouse</li>
              <li>Game of Thrones or Squid Game</li>
              <li>TikTok</li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Box
              as={"img"}
              src={"/articles/virality/network.png"}
              alt={"Network Virality"}
              css={{
                width: "640px",
              }}
            />
            <Title level="4" as="h3">
              4. Network Virality
            </Title>
            <Paragraph>
              Some products provide the more value the more users there are -
              you probably won't visit a Zoom party alone, so you have to invite
              someone. It is true for almost any social network. Or in example
              with Paypal - you need an account to send money as well as your
              counterpart should have one to receive it, which is a pretty nice
              motive to sign up. So in case, if the strength of a product is in
              the network, users invite others to join to get more use out of
              it. If the product is a good one.
            </Paragraph>
            <List>
              <li>Zoom</li>
              <li>Paypal payment</li>
              <li>Probably, all the messengers you use</li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Box
              as={"img"}
              src={"/articles/virality/incentive.png"}
              alt={"Incentive Virality"}
              css={{
                width: "640px",
              }}
            />
            <Title level="4" as="h3">
              5. Incentive Virality
            </Title>
            <Paragraph>
              Pretty straight this one is - you can set a reward for any new
              referred user. It can be money, a discount or some other valuable
              currency you have in your product - Dropbox was paying in
              megabytes.
            </Paragraph>
            <List>
              <li>Uber bonus</li>
              <li>Dropbox free space</li>
              <li>Airbnb discount</li>
            </List>
          </Box>

          {/* Common traits section */}

          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Title level="3" as="h2">
              Common traits
            </Title>
            <Paragraph>
              Virality is often associated with marketing but it also requires
              your product to be built in a way easy to share or contain the
              motivation to tell spread a word about it. Penenberg's "Viral
              loop" mentioned above contains the common traits of viral products
              and some of them still are applicable today:
            </Paragraph>
            <List>
              <li>
                <Title level="5" as="h4">
                  Free:
                </Title>
                <Paragraph>
                  A core value of your product should be available to the
                  clients at no charge and easy to get so that they can get a
                  taste of it;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Organizational technology:
                </Title>
                <Paragraph>
                  Don’t create content — let your users do it and simply
                  organize it. Facilitating access can lead to a mass audience.
                  Take a look at Google or Instagram.
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Simple concept:
                </Title>
                <Paragraph>Easy and intuitive to use.</Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Built-in virality:
                </Title>
                <Paragraph>
                  Users spread the product purely out of their own self-interest
                  and, in the process, offer a powerful word-of-mouth
                  endorsement to each subsequent user. (And word of mouth is
                  widely viewed as the best form of advertising.)
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Network effects:
                </Title>
                <Paragraph>
                  The more who join, the more who have an incentive to join. A
                  telephone, for example, becomes continually more helpful to
                  those, who already have one as more people are added to the
                  network.
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Stackability:
                </Title>
                <Paragraph>
                  A viral network can be laid over another, fostering the
                  other’s growth (PayPal as a payment tool for online payments;
                  YouTube video embedding).
                </Paragraph>
              </li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$32",
            }}
          >
            {/* Examples section */}

            <Title level="3" as="h2">
              In use mechanisms
            </Title>
            <Paragraph>
              Here you can find some examples what companies do to make us share
              awareness about them.
            </Paragraph>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Title level="4" as="h3">
              1. Sharable content
            </Title>
            <Paragraph>
              Your product may make some use of user data or specific
              functionality. It allows the creation of unique sharable materials
              which serve as a marketing tool itself, making users increase the
              brand awareness.
            </Paragraph>
            <Box
              as={"img"}
              src={"/articles/virality/sharable_content.png"}
              alt={"Sharable content"}
              css={{
                width: "640px",
                marginBottom: "0",
              }}
            />
            <List>
              <li>
                <Title level="5" as="h4">
                  Spotify
                </Title>
                <Paragraph>
                  Several times a year you can see your social networks get full
                  of Spotify Wrapped - everyone shares their listener’s stats.
                  It’s a great example of how company gets use of the data it
                  owns;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Prisma, Instagram, TikTok, Snapchat …{" "}
                </Title>
                <Paragraph>
                  Users share unique content made with the apps on other
                  platforms, which usually mention the tool. This is an example
                  of how this apps facilitate virality with sharing mechanisms;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Hotmail
                </Title>
                <Paragraph>
                  You may know the famous story about “Get your free email at
                  Hotmail.com” footer. Every message sent from Hotmail used to
                  contain this little promo line and let the company grow the
                  awareness and userbase exponentially.
                </Paragraph>
              </li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Title level="4" as="h3">
              2. Commodities
            </Title>
            <Paragraph>
              Some solutions are stacked over the other services attracting
              users on other platforms. If you can take some headaches off by
              providing a utility, you can get use of being omnipresent
              throughout the other products.
            </Paragraph>
            <Box
              as={"img"}
              src={"/articles/virality/commodities.png"}
              alt={"Commodities"}
              css={{
                width: "640px",
                marginBottom: "0",
              }}
            />
            <List>
              <li>
                <Title level="5" as="h4">
                  Youtube{" "}
                </Title>
                <Paragraph>
                  It was and still is hard to imagine a website without an
                  embedded Youtube video;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  PayPal
                </Title>
                <Paragraph>
                  It has become a convenient payment instrument for both sides
                  of a deal (mostly, on eBay in the early days) + 10$ joining
                  reward stimulated link sharing even more;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  “Book me” apps (Booksy, Bookme …)
                </Title>
                <Paragraph>
                  Simple (but still branded) booking tools empower entrepreneurs
                  to process clients, and clients are happy to see availability
                  and avoid calling. But it also allowed those apps to enter
                  other platforms same as PayPal did at zero price.
                </Paragraph>
              </li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Title level="4" as="h3">
              3. Deal
            </Title>
            <Paragraph>
              Offers made by products stimulate users to invite others to the
              platform. It's a very straignt concept – you pay only for the
              leads that reach some set point.
            </Paragraph>
            <Box
              as={"img"}
              src={"/articles/virality/deal.png"}
              alt={"Deal"}
              css={{
                width: "640px",
                marginBottom: "0",
              }}
            />
            <List>
              <li>
                <Title level="5" as="h4">
                  Tupperware{" "}
                </Title>
                <Paragraph>
                  Pioneer of viral marketing with the Tupperware parties - the
                  party is run by a Tupperware "consultant" for a host or
                  hostess who invites friends and neighbours into their home to
                  see the product line. This way, a customer can become a
                  distributor and get an income share;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Dropbox
                </Title>
                <Paragraph>
                  Dropbox used to give away its own currency – you could get
                  extra cloud storage for inviting new users;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Uber
                </Title>
                <Paragraph>Invited users bring you both a deposit.</Paragraph>
              </li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Title level="4" as="h3">
              4. Content
            </Title>
            <Paragraph>
              Companies may spread brand awareness and build trust through
              expert content or tools. By providing helpful information for the
              domain, you are giving free advice - so your client gets some
              value before even learning about you. Alongside, it brings up
              scenarios for your services.
            </Paragraph>
            <Box
              as={"img"}
              src={"/articles/virality/content.png"}
              alt={"Content"}
              css={{
                width: "640px",
                marginBottom: "0",
              }}
            />
            <List>
              <li>
                <Title level="5" as="h4">
                  Intercom
                </Title>
                <Paragraph>
                  Inside intercom has a nice blog on building a product - taking
                  into account their b2b model, it's an accurate targeting for
                  their audience;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  App Store
                </Title>
                <Paragraph>
                  Curated app lists help to grow the audience for the apps and
                  increase downloads for the market;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Aviasales
                </Title>
                <Paragraph>
                  Travel blog by a travel company not only tells you about
                  possible destinations but provides a ticket.
                </Paragraph>
              </li>
            </List>
          </Box>
          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Title level="4" as="h3">
              5. Side mission
            </Title>
            <Paragraph>
              Entertaining, useful and exciting initiatives, which are not
              obligatory connected to the primary company mission create a news
              buzz and bring another reason to mention the company name.
            </Paragraph>
            <Box
              as={"img"}
              src={"/articles/virality/side_missions.png"}
              alt={"Side mission"}
              css={{
                width: "640px",
                marginBottom: "0",
              }}
            />
            <List>
              <li>
                <Title level="5" as="h4">
                  Airbnb's Lottie
                </Title>
                <Paragraph>
                  Animation tool, along with code style guide, adds up to the
                  company authority;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Recycle at H&M
                </Title>
                <Paragraph>
                  Recycling initiative has created another reason to bring a
                  visit;
                </Paragraph>
              </li>
              <li>
                <Title level="5" as="h4">
                  Google
                </Title>
                <Paragraph>
                  Quite a lot of Google Experiments help to increase the brand’s
                  image as an innovative and versatile one.
                </Paragraph>
              </li>
            </List>
          </Box>

          {/* Closure section */}

          <Divider />

          <Box
            css={{
              marginBottom: "$48",
            }}
          >
            <Title level={3} as="h2">
              What's now?
            </Title>
            <Paragraph>
              It was assembled and written as a theoretical part of the Virality
              ideation workshop. I wanted to illustrate what is virality and how
              it functions to my team at StarOfService. You can find out how we
              used this information to estimate our viral potential and discover
              opportunities in Virality Workshop.
            </Paragraph>
          </Box>
          <Divider />
          <WritingList />
        </Box>
      </Box>
    </Layout>
  )
}

export default ArticleViralityPage
