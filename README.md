# Todo list

1.  Susiziurek kodo formatavima (reiktu code linting pasisetupint, kad ale nepraleistu netvarkingo kodo)
2.  Pasimokinti per theming tokius visokius kaip spalvas:

    - https://mui.com/material-ui/customization/theming/

3.  `<h2>Todo App</h2>` panaudot typography:

    - https://mui.com/material-ui/customization/typography/

    beje ar h1 kur nors yra, ar prasideda nuo h2? tada ner gerai.

4.  Visokiem margin/padding geriau prie px nesiristi, jie turi savo scale ir realiatyvius dydzius pvz.: `marginRight: 6px`

    - https://mui.com/system/getting-started/the-sx-prop/
    - https://mui.com/material-ui/customization/spacing/

    Gerai isiskaityk viska cia:

    - https://mui.com/material-ui/customization/how-to-customize/
    - https://mui.com/material-ui/customization/theme-components/
    - https://mui.com/material-ui/customization/theming/
    - https://mui.com/material-ui/customization/palette/

    Nes ta sx jie padare tokiam one-off vienkartiniam, neperpanaudojam dalykui

5.  Kad nereiktu prop drill'int, pasikurti TodosContext, kas pakeis kad situ nereiks visur persiuntinet -

    ```
    <TodoForm setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos} />
    ```

    - https://react.dev/reference/react/createContext

6.  Pasidaryk reusable Modal, kur tuose try catch error galetum juos parodyt vietoj console.error.
    Manau galima irgi dar vieno context reikes, nes reikes state keitaliot kada show kada ne, koks title, message, bet cia jau sito modal context nieko bendro su todos context

    - https://mui.com/material-ui/react-modal/#basic-modal

7.  Vietoj pavieniu ir tiesioginiu fetch, pasijunk ReactQuery (ziuriu dabar dar vadina TanStack Query):

    - https://tanstack.com/query/latest (tik kad man pagriuves ju website dabar..)
    - https://refine.dev/blog/react-query-guide

      Mutation - jie vadina viska kas keicias - update/add/delete

    12:17
    react query'iui - tolygus (biski maziau populiarus, bet ir placiai naudojmas) - SWR https://swr.vercel.app/
    12:17
    pasiziurek kuris labiau makes sense ta ir pasirink

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### ``

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
