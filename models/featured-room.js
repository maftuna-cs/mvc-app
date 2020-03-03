const featuredRoom =
{

    fakeDB: [], //property

    init() {

        this.fakeDB.push({
            title: 'Future Students', 
            description: `Explore our full-time and continuing education programs. Find out how a Humber education will help you chart a sure path to your career.`, 
            imgURL: `https://images.unsplash.com/photo-1507537509458-b8312d35a233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`
        });

        this.fakeDB.push({
            title: 'Current Students', 
            description: `Take advantage of unique student resources, work-integrated learning, study abroad opportunities and program pathways.`, 
            imgURL: `https://images.unsplash.com/photo-1567168544230-d5a9401299a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`
        });

        this.fakeDB.push({
            title: 'Careers', 
            description: `Partner with us – we can help with student work placements and industry research projects. We also deliver training solutions.`, 
            imgURL: `https://images.unsplash.com/photo-1561489422-45de3d015e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`
        });

    },
    getaFeaturedRooms() {  // method // return the array
        return this.fakeDB;
    }

}

featuredRoom.init();
module.exports=featuredRoom;