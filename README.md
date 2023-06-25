This is a create-next-app accepting all the defaults from the setup prompts, which means it is configured for Typescript, Tailwind CSS, ESLint, and the new NextJS App directory. Server rendered components are new to React and by default, all components are server components unless a 'use client' directive is use at the very top of the component's file (before the import statements).

For our backend, we have some choices to make:

-should we stay in the NextJS/Vercel ecosystem and build our api with their serverless api routes? NextJS is designed to be a "full-stack" framework and Vercel is optimized and built very nice deployment conveniences. makes it so we can keep it all in one repo instead of separate front and backend projects.

-or should we build a separate backend (Node/Express)? Serverless isn't without it's limitations. Serverless does not support web sockets.

-we should definitely have either a database or some alternative way of persisting data. I would be down for Postgres/Sequelize or MongoDB/Mongoose. I would also be down for learning something new.

-should probably have some sort of authentication/authorization. However, I've heard that portfolio projects should not require recruiters/employers to login to experience the app. Still most real-world apps require login.

-I would like it to have real-time functionality. If we go the serverless route, I am in unfamiliar territory. We would have to figure that out...could be fun.
