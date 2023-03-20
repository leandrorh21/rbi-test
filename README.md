# GraphQLSubscription

Nintendo backend in javascript

## Technologies used

- NodeJS (asynchronous event-driven JavaScript runtime)
- Express (REST Server)
- GraphQl (Query language API)
- Sequelize (ORM for Postgres)

## Commands

### Run the project

1. Clone the repository

```bash
git clone https://github.com/Chazki/GraphQlSubscription.git
```

2.  Install the dependecies

```bash
yarn install
```

3. Run the project

```bash
 yarn start
```

### Migrate tables

- Delete all tables mapped in sequelize

```bash
yarn seed
```

- Create tables mapped in the migrations files

```bash
yarn migrate
```

- Insert default data of the seeders files

```bash
yarn seed
```

- Clean the database, create tables and insert default data

```bash
yarn wipe
```

## File structure

```bash
.
├── src                                   #source files of the project
│   ├── config                            #configurations directory for sequelize and AWS service
│   ├── http
│   │   ├── graphQl                       #directory with GrapQl configurations
│   │   │   ├── attributesReplacements    #Attributes of the tables
│   │   │   ├── models                    #directory with all models, typedefs and resolvers of graphQl
│   │   │   ├── utils                     #Miscellaneous functions for graphQl models
│   │   │   └── index.js                  #principal file with all configurations for GraphQl
│   │   └── pdf
│   ├── sequelize
│   │   ├── config                        #configurations of sequelize
│   │   ├── dataSources                   #files with data for the seeders
│   │   ├── migrations                    #directory with files for the creations of tables with sequelize
│   │   ├── models                        #Files with Table estructure, use in queries and mutations
│   │   ├── seeders
│   │   │   └── dev                       #Files with the default data for the tables
│   │   └── utils
│   │   │   └── tableNames.js             #names for the tables
│   ├── services
│   │   └── aws                           #functions and templates for the aws services
│   ├── triggers
└──── utils
```
