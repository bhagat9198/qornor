# Getting Started with Qorner App

In order to run this react app on your local device. You need to follow basic steps

- Unzip the folder and open the folder in the editor of your choice.Eg: (VS Code)
- Open the terminal and run 2 commands in order
  - `npm install` => this will install the node dependencies which are required for this project is run.
  - Wait for the depenedices to install, may take few minutes (Depending upon your net speed 🌐📈)
  - `npm start` => this will start react app in your local device.
- Hop on to your browser at [http://localhost:3000/](http://localhost:3000/ "http://localhost:3000/")
- If all no unprecedented error occur, you will able to see the reap app running 🏃🏃🏃
- This react app site is best viwed in mobile view, thus to get better expirence press
  - For MAC Users : <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>i</kbd>
  - For Windows Users : <kbd>⌃</kbd> <kbd>⇧</kbd> <kbd>i</kbd>
- Hurry🎆, now you will able to get best expirence of site in 📱 view.

## Bit about the app code

### code is very modular and its divided in to 3 main folders:

1. components => this folder contains the code which is getting reused more than once.
2. containers => this folder contains the main code which uses more than one component and makes the componets work with each other.
3. utils => this folder cotains the code other than JSX, but small utils function which can be used more than once.

### NPM packages used apart from react default packages :-

1.  **react-apexcharts** : To display the graphs based on data
2.  **react-loader-spinner** : To display the spinner if graph doesnt receive the data or some other error if graph was not able to load up
3.  **react-loading-skeleton** : To display text skeleton if proper is not recived due to API error or component used in wrong manner
4.  **react-toastify** : To display the toast (small messages) to users based on its activity.
5.  **prop-types** : It helps in type checking of propes are send from one component to another. Thus, helping us in wreiting safer and clean code. Its a _devDependencies_
6.  **tailwindcss** : Manging lots of css can be difficult. Thus, using the tailwind CSS to get the styling done in elegent and clean way. Its a _devDependencies_
7.  **apexcharts** : This package is internally being used by **react-apexcharts** purpose .

### Want tto change the base URL of API?

Go to **APP.JS** file in **src/** folder and from there change the `BASE_URL` value.

### Note

In this project `useEffect()` and `useState()` are heavly used by considering the size of the project but as few place _chaining of props_ is there is can be considered bad depending on the use case. But considering the size of project and performace/efficiency is not geting depleting.<br />
Alternate to _chaining of props_, `AppContext` api can be use or `Redux` which is much more powerfull way to store the state and to change the state.

<br />
Cheers. 🍺
You are good to go & rock. 🕺💃
Lets see on other side!!! 🤝
