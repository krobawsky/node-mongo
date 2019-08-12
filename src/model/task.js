const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: String,
    description: String,
    tiempo:  {
        type: String,
        default: "0"
    },
    status: {
        type: Boolean,
        default: false
    },
    sub_tasks:[ {
        detalle: String,
        tiempo:  {
            type: String,
            default: "0"
        },
        created: { 
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('tasks', TaskSchema)