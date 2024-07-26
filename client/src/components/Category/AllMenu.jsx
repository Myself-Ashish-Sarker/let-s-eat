import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AllMenu = () => {

    const [items, allItems] = useState([]);

    useEffect(() => {
        fetch("json/category.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                allItems(data)
            })
            .catch(err => console.log(err))

    }, [])

    const burgers = items.filter(item => item.title === "burger");
    const meows = items.filter(item => item.title === "pizza");

    return (
        <div>
            <div className="flex justify-center mt-24">
                <h1 className="font-dancingScript text-5xl font-bold">Check Our Menu</h1>
            </div>

            <div className='mt-14'>

                <Tabs forceRenderTabPanel>
                    <TabList className="flex justify-center gap-7">
                        <Tab className="border-2 bg-emerald-700 text-white px-1 py-1 rounded-md cursor-pointer">Pizza</Tab>
                        <Tab className="border-2 bg-emerald-700 text-white px-1 py-1 rounded-md cursor-pointer">Burger</Tab>
                        <Tab className="border-2 bg-emerald-700 text-white px-1 py-1 rounded-md cursor-pointer">Noodles</Tab>
                        <Tab className="border-2 bg-emerald-700 text-white px-1 py-1 rounded-md cursor-pointer">Lunch & Dinner</Tab>
                        <Tab className="border-2 bg-emerald-700 text-white px-1 py-1 rounded-md cursor-pointer">Cold Drinks</Tab>
                        <Tab className="border-2 bg-emerald-700 text-white px-1 py-1 rounded-md cursor-pointer">Custom Order</Tab>
                    </TabList>
                    <TabPanel>
                        {
                            meows.length > 0 ? (
                                meows.map((meow, index) => (
                                    <div key={index}>
                                        <h1>{meow.name}</h1>
                                    </div>
                                ))
                            ) : (
                                <p>No Cats Avaliable</p>
                            )
                        }
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-10'>
                            {
                                burgers.length > 0 ? (
                                    burgers.map((burger, index) => (
                                        <div key={index} className="card bg-base-100 w-96 shadow-xl">
                                            <figure>
                                                <img
                                                    src={burger.image_link}
                                                    alt="burgers" />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{burger.name}</h2>
                                                <p>{burger.short_description}</p>

                                                <div className='mt-4 flex justify-between'>
                                                    <button className='btn btn-outline btn-primary'>View Details</button>
                                                    <button className='btn btn-success text-white'>Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Currently no Burgers</p>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry's best friend. Built in Tijuana, Mexico, he is the Planet Express Ship's cook.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
                    </TabPanel>
                    <TabPanel>
                        <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png" alt="Professor Hubert J. Farnsworth" />
                    </TabPanel>
                    <TabPanel>
                        <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AllMenu
