import {Sequelize} from "sequelize";

const url = "postgres://anvar:312@localhost:5432/rental";

const sequelize = new Sequelize(url);

async function db_connection() {
    try {
        await sequelize.authenticate().then(res => {
            console.log("db connecting successfully");
        }).catch(err => {
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    }
}

export default db_connection