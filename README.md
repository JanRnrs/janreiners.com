# JanReiners.com

Welcome to the repository for my personal website [janreiners.com](https://janreiners.com). This site serves as both a technical showcase and a platform to generate the PDF version of my CV. Note that some of the code here is not fully optimized for web viewing. It's a client-side rendered application, even though it's just a static page.

## Technologies

### Frontend

This application is built using [Vue.js](https://vuejs.org/). I like using vue especially in small projects like this, since it is lightweigth and provides a reactive and component-based architecture. Additionally I wanted a little change to my ract development lately.

As always I use [Typescript](https://www.typescriptlang.org/) to catch errors with proper typing, which makes development more enjoyable and predictable.

[Vite](https://vitejs.dev/) was selected as the build tool, due to my familiarity with it, its fast development server and optimized builds.

Styling is handled with [TailwindCSS](https://tailwindcss.com/), because it is a popular CSS Library I wanted to try out and really liked it

I've also included [Prettier](https://prettier.io/) for code formatting.

### Infrastructure

The source code is hosted on GitHub, with [GitHub Actions](https://github.com/features/actions) managing the CI/CD pipeline. The [workflow](./.github/workflows/deploy.yml) builds the application and uploads the bundled files to [S3](https://aws.amazon.com/s3/).

On AWS, a [CloudFront](https://aws.amazon.com/cloudfront/) instance serves the S3 files via HTTPS.

My domain, janreiners.com, is managed through [OVH](https://www.ovhcloud.com) and points to [Route 53](https://aws.amazon.com/route53/)'s name servers. The root domain is configured to an A record pointing to the CloudFront instance.
