# SportSee

## Project Structure

### src

The main project folder.

#### assets

Folder for storing static files.

- **img/**
  - Contains all icons and images used in the project.

#### pages

Folder for storing application pages.

- **Main/**
  - **Main.jsx**: Main file for the component of the page.
  - **style.module.css**: Styles for the `Main` component.

#### components

Folder for storing components used in the application.

- **ActivityChart/**

  - **ActivityChart.jsx**: Component for displaying a bar chart.

- **DataCards/**

  - **DataCards.jsx**: Component for displaying data cards.

- **TodayScoreChart/**

  - **TodayScoreChart.jsx**: Component for displaying a donut chart.

- **Header/**

  - **Header.jsx**: Component for displaying the header.

- **AverageSessionChart/**

  - **AverageSessionChart.jsx**: Component for displaying a line chart.

- **PerformanceChart/**

  - **PerformanceChart.jsx**: Component for displaying a radar chart.

- **SideBar/**
  - **SideBar.jsx**: Component for displaying the sidebar.

#### services

Folder for storing services that make API requests.

- **getAverageSession.js**: Service for getting user's average session.
- **getUser.js**: Service for getting user data.
- **getUserActivity.js**: Service for getting user activity.
- **getUserPerformance.js**: Service for getting user performance metrics.

## Component Descriptions

- **Main.jsx**: The main application page. This is where all other components are assembled and main information is displayed.
- **ActivityChart.jsx**: Component responsible for displaying a bar chart.
- **DataCards.jsx**: Component that displays various data cards.
- **TodayScoreChart.jsx**: Component for displaying a donut chart.
- **Header.jsx**: Component that displays the application header.
- **AverageSessionChart.jsx**: Component that displays a line chart.
- **PerformanceChart.jsx**: Component that displays a radar chart.
- **SideBar.jsx**: Component that displays the sidebar with navigation.

## Service Descriptions

- **getAverageSession.js**: Function that makes an API request to get user's average session data.
- **getUser.js**: Function that makes an API request to get main user data.
- **getUserActivity.js**: Function that makes an API request to get user activity data.
- **getUserPerformance.js**: Function that makes an API request to get user performance data.
