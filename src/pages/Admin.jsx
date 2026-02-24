import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router';

import TabContent from "../components/TabContent";
import Modal from "../components/Modal";

const Admin = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({id: null, api: null});

  const confirmDelete = (id,api) => {
    setIsOpen(true);
    setItemToDelete({id,api});
  }

  const deleteItem = async () => {
    try {
      await axios.delete(`/api/${itemToDelete.api}/${itemToDelete.id}`);
    } catch (error) {
      console.error(error);
    }
    setData(prev => prev.filter(item => item.id !== itemToDelete.id));
    setIsOpen(false);
    setItemToDelete({id: null,api: null});
  }

  useEffect(() => {
    const getTabContent = async (tab) => {
      try {
        const response = await axios.get(`/api/${tab}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getTabContent(activeTab);
  }, [activeTab])


  const tabs = [
    { "id": "tab1", "name": "products", "label": "Products" },
    { "id": "tab2", "name": "posts", "label": "Posts" },
  ]
  return (
    <div className="admin">
      <div className="border bg-white p-8 mx-10 my-5 shadow-xl text-right">
        <Link to={`/${activeTab}/add`} className="btn primary min-w-[130px]">
          Add {activeTab==='products'?'product':activeTab==='posts'&&'post'}
        </Link>
      </div>
      <div className="border bg-white p-8 mx-10 my-5 shadow-xl">
        <div className="flex flex-wrap border-b-2 border-gray-400">
          {tabs.map((tab) => (
            <button key={tab.id}
              className={`px-4 py-2 font-semibold ${activeTab === tab.name ? "bg-blue-300 text-white" : "bg -white text-gray-500 hover:text-blue-400"
                }`}
              onClick={() => {
                setActiveTab(tab.name)
              }}>{tab.label}</button>
          ))}
        </div>

        <div>
          <TabContent data={data} type={activeTab} onDelete={confirmDelete} />
        </div>
      </div>

      <Modal isOpen={isOpen}>
        <button onClick={deleteItem} className="btn danger">Delete</button>
        <button onClick={()=>setIsOpen(false)} className="btn primary">Cancel</button>
      </Modal>

    </div>
  )
}

export default Admin;