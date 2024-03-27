/*Bài 6: Cho class generic ObjectManager<T>.  
Với các method
addItem(item): Thêm một đối tượng vào danh sách.
removeItem(item): Xóa một đối tượng khỏi danh sách.
getAllItems(): Trả về toàn bộ danh sách đối tượng.
getItemById(id): Tìm và trả về một đối tượng dựa trên id.
clear(): Xóa toàn bộ danh sách. 
Tạo một interface Person với các thuộc tính id, name, age.
Sử dụng class ObjectManager để quản lý các Person */

interface Person1 {
    id: number;
    name: string;
    age: number;
}

class ObjectManager<T extends {id: number}> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAllItems(): T[] {
        return this.items;
    }

    getItemById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    clear(): void {
        this.items = [];
    }
}

// Sử dụng ObjectManager để quản lý các Person
const personManager = new ObjectManager<Person1>();

// Thêm một số Person vào ObjectManager
personManager.addItem({ id: 1, name: 'Alice', age: 30 });
personManager.addItem({ id: 2, name: 'Bob', age: 25 });

// Lấy danh sách toàn bộ Person
const allPersons = personManager.getAllItems();
console.log("All Persons:", allPersons);

// Lấy một Person theo ID
const personById = personManager.getItemById(1);
console.log("Person with ID 1:", personById);

// Xóa một Person
personManager.removeItem(allPersons[0]);
console.log("Persons after removing:", personManager.getAllItems());

// Xóa toàn bộ danh sách
personManager.clear();
console.log("Persons after clearing:", personManager.getAllItems());
