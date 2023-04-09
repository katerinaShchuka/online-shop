export default class BookstoreService {

   data = [
            { id: 1, 
            title: 'Self Leadership and the One Minute Manager: Gain the Mindset and Skillset for Getting What You Need to Succeed', 
            author: 'Susan Fowler',
            price: 24,
            coverImage: 'https://m.media-amazon.com/images/I/51KX0ZhOsVL.jpg',
        link: "https://www.amazon.com/Self-Leadership-Minute-Manager-Revised/dp/0062698672"},
            { id: 2,
            title: 'Release It!: Design and Deploy Production-Ready Software (Pragmatic Programmers)',
            author: 'Michael Nygard',
            price: 30,
            coverImage: 'https://m.media-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg',
        link: "https://www.amazon.com/Release-Production-Ready-Software-Pragmatic-Programmers/dp/0978739213" }
        ];
 getBooks() {
            return new Promise((resolve) => {
                
                        resolve(this.data);
                    })
                }
            }

         
    

      
        
    