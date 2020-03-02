const rooms =
{

    fakeDB: [], //property

    init() {

        this.fakeDB.push({
            title: 'Leonardo Hotel', description: `Amsterdam Rembrandtpark
        `, price: `1904`, imgURL: `https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80`
        });

        this.fakeDB.push({
            title: 'Park Plaza', description: `Westminster Bridge London
        `, price: `1904`, imgURL: `https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80`
        });

        this.fakeDB.push({
            title: 'Hampton', description: `By Hilton London Docklands
        `, price: `1904`, imgURL: `https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80`
        });


        this.fakeDB.push({
            title: 'Charming Appt', description: `Eiffel Twr
        `, price: `1904`, imgURL: `https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80`
        });

        this.fakeDB.push({
            title: 'Turenne Place', description: `Sainte Catherine 
      `, price: `1904`, imgURL: `https://images.unsplash.com/photo-1578852640643-631c0a603084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`
        });

        this.fakeDB.push({
            title: 'Villa du Square', description: `Luxury Guest House
    `, price: `1904`, imgURL: `https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80`
        });

        this.fakeDB.push({
            title: 'Hotel Eden ', description: `Montmartre
  `, price: `1904`, imgURL: `https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80`
        });

        this.fakeDB.push({
            title: 'Hilton London', description: `Wembley
`, price: `1904`, imgURL: `https://images.unsplash.com/photo-1560920452-aa28bff4c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80`
        });

        this.fakeDB.push({
            title: 'Novotel London ', description: `Excel
`, price: `1904`, imgURL: `https://images.unsplash.com/photo-1523699289804-55347c09047d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`
        });

    },
    getallRooms() {  // method // return the array
        return this.fakeDB;
    }

}

rooms.init();
module.exports=rooms;


