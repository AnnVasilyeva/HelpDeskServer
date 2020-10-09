

class Ticket {
    constructor(name, description) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.status = false;
        this.created = new Date().toLocaleString();
    }
}