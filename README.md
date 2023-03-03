

## How to Install and Run the Project

Run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

We use sessionStorage to store the post data. So, if you want to change the user, please close the window and open it again.

## Structure

```
.
├── public
└── src
    ├── components
    │  ├── Avatar          # user avatar
    │  ├── Button          # generic button component
    │  ├── DailyDialog     # daily dialog in show top page
    │  ├── DailyFeed       # daily feed in show home
    │  ├── Dialog          # generic dialog
    │  ├── Event           # team event
    │  ├── Feeling         # status and choices for feelings
    │  ├── Heading         # heading for pages
    │  ├── Icon            # UI icon
    │  ├── Input           # input(textarea)
    │  ├── Layout          # common layout for all pages
    │  ├── MemberItem      # member item for member list page
    │  ├── PostList        # post list
    │  └── Sidebar         # sidebar for all pages
    ├── constants          # define constants (mock data)
    ├── hooks              # define hooks (for check user posted data)
    ├── pages              # define pages
    ├── styles             # define styles (global styles only)
    ├── types              # define types (for feeling, post, user, event.)
    └── utils              # define utilities (functions for handling dates)
```

## Packages

### App
- Next.js(React)
- TypeScript

### Lint
- ESLint
- Prettier

### Style
- Tailwind CSS

### Animation
- Framer Motion
