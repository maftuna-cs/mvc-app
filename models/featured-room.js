const featuredRoom =
{

    fakeDB: [], //property

    init() {

        this.fakeDB.push({
            title: 'Charming Apt', 
            description: `Modern open plan super spacious penthouses in historic Cape Town`,
            price: `1904`, 
            rate: `(5)`,
            imgURL: `https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`
        });

        this.fakeDB.push({
            title: 'Turenne Place', 
            description: ` The big patio with jacuzzi bath is ideal to watch the sunset and the city lights. `,
            price: `350`, 
            rate: `(5)`,
            imgURL: `https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`
        });

        this.fakeDB.push({
            title: 'Park Plaza', 
            description: `Separate scullery/ laundry & full open plan kitchen & shared pool`, 
            price: `499`,
            rate: `(5)`,
            imgURL: `https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80`
        });

    },
    getallFeaturedRooms() {  // method // return the array
        return this.fakeDB;
    }

}

featuredRoom.init();
module.exports=featuredRoom;