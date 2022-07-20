# GraphQL Cursor Connections With Filter And Ordering

The GraphQL Relay Cursor Connections specification illustrates how to implement Cursor Pagination in GraphQL. However, it does not describe how to implement more advanced query features like filtering and ordering. In this repository, I create an example server that implements the GraphQL Relay Cursor Connections with filtering and ordering.

## Setup

To get started with this repository you can follow the following steps bellow. To complete the steps below you will need to have `yarn` and `postgres` installed on your machine.

### 1) Dependencies

To install the required packages run the following command:

```
$ yarn
```

### 2) Environment

To start using this repository you will need to set the `DATABASE_URL` and `PORT` environement variables. You can use a `.env` to add these variables or run the following command (with the appropriate values):

```
$ export DATABASE_URL=___DATABASE_URL___
$ export PORT=___PORT___
```

### 3) Database

To initialize the database run the following Prisma you will need to run the following command:

```
$ yarn prisma migrate dev --name init
```

### 4) Code Generation

To generate the GraphQL and Prisma types you will need to run the following command:

```
$ yarn generate
```

## Starting the Service

Once you have setup the repository by following the steps layed out above you can start the service by running the following command:

```
yarn start
```

## Performing Queries

If you go to the URL that your service is running on you can get redirected to the Apollo Studio playground. Before running any queries you should create some mock data in your Database.
