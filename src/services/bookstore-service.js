export default class BookstoreService {

   data = [
            { id: 1, 
            title: 'Self Leadership and the One Minute Manager: Gain the Mindset and Skillset for Getting What You Need to Succeed', 
            author: 'Susan Fowler',
            price: 20.63,
            coverImage: 'https://m.media-amazon.com/images/I/51KX0ZhOsVL.jpg',
        link: "https://www.amazon.com/Self-Leadership-Minute-Manager-Revised/dp/0062698672"},
            
        { id: 2,
            title: 'Release It!: Design and Deploy Production-Ready Software (Pragmatic Programmers)',
            author: 'Michael Nygard',
            price: 19.39,
            coverImage: 'https://m.media-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg',
        link: "https://www.amazon.com/Release-Production-Ready-Software-Pragmatic-Programmers/dp/0978739213" },

        { id: 3, 
            title: 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems', 
            author: 'Martin Kleppmann',
            price: 23.17,
            coverImage: 'https://m.media-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg',
        link: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_bxgy_img_sccl_1/140-2887807-4607738?pd_rd_w=skNMY&content-id=amzn1.sym.6ab4eb52-6252-4ca2-a1b9-ad120350253c&pf_rd_p=6ab4eb52-6252-4ca2-a1b9-ad120350253c&pf_rd_r=G2GC29NDBJQ9TT9HEEVM&pd_rd_wg=o8OuS&pd_rd_r=af4c50fc-db43-45e9-bc61-f68e9adf1293&pd_rd_i=1449373321&psc=1"},
            
        { id: 4, 
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship', 
            author: 'Robert C. Martin',
            price: 28.99,
            coverImage: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=pd_bxgy_img_sccl_1/140-2887807-4607738?pd_rd_w=dAyyT&content-id=amzn1.sym.6ab4eb52-6252-4ca2-a1b9-ad120350253c&pf_rd_p=6ab4eb52-6252-4ca2-a1b9-ad120350253c&pf_rd_r=63XC5HEWG6ZK0CTKAYK3&pd_rd_wg=QQQHo&pd_rd_r=038ffbb4-5ecb-42a6-90db-524643da34f9&pd_rd_i=0132350882&psc=1"},
            
        { id: 5, 
            title: 'Designing Immersive 3D Experiences: A Designers Guide to Creating Realistic 3D Experiences for Extended Reality (Voices That Matter)', 
            author: 'Renee Stevens',
            price: 40.99,
            coverImage: 'https://m.media-amazon.com/images/I/41rkhs4Do+L._SX258_BO1,204,203,200_.jpg',
        link: "https://www.amazon.com/dp/0137282834/ref=sspa_dk_detail_1?psc=1&pd_rd_i=0137282834&pd_rd_w=lkQGZ&content-id=amzn1.sym.af9528d2-09ba-47ee-b909-59e3022bebe1&pf_rd_p=af9528d2-09ba-47ee-b909-59e3022bebe1&pf_rd_r=Z4CTSBWC5N6QKD3DTKZD&pd_rd_wg=j7flb&pd_rd_r=1cd79f03-3bf8-44ad-a093-50048b24e11c&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMjhYR0NCVEZNMUNRJmVuY3J5cHRlZElkPUEwNzgwNzMwM1M3UUdQRUlNODNIRSZlbmNyeXB0ZWRBZElkPUEwMDE4NTM2M0YzM1g4QzFCUUhWSSZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="},
        ];

 getBooks() {
            return new Promise((resolve) => {
                
                        resolve(this.data);
                    })
                }
            }

         
    

      
        
    