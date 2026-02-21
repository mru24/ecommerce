import {formatDate, formatTime} from './functions';


const TabContent = ({ data, type, onDelete }) => {

  if (type === 'products') {
    return (
      <table className="w-full">
        <thead className="bg-gray-300 px-2 border-b-2 border-gray-400">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Image</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Description</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Created</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Updated</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={item.id % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="p-3 text-sm text-gray-700">{item.imageFilename}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.name}</td>
              <td className="p-3 text-sm text-gray-700">{item.description}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.price}</td>
              <td className="p-3 text-sm text-gray-700">
                <span className="whitespace-nowrap block">{formatDate(item.createdAt)}</span>
                <span className="whitespace-nowrap block">{formatTime(item.createdAt)}</span>
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="whitespace-nowrap block">{formatDate(item.updatedAt)}</span>
                <span className="whitespace-nowrap block">{formatTime(item.updatedAt)}</span>
              </td>
              <td className="p-1 pr-0 text-right whitespace-nowrap">
                <button className="btn primary mx-2">Edit</button>
                <button
                  className="btn danger inline-block"
                  onClick={()=>onDelete(item.id,type)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  } else if (type === 'posts') {
    return (
      <table className="w-full">
        <thead className="bg-gray-300 px-2 border-b-2 border-gray-400">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">Title</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Author</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Excerpt</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Created</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Updated</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={item.id % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="p-3 text-sm text-gray-700">{item.title}</td>
              <td className="p-3 text-sm text-gray-700">{item.author}</td>
              <td className="p-3 text-sm text-gray-700">{item.excerpt}</td>
              <td className="p-3 text-sm text-gray-700">
                <span className="whitespace-nowrap block">{formatDate(item.createdAt)}</span>
                <span className="whitespace-nowrap block">{formatTime(item.createdAt)}</span>
              </td>
              <td className="p-3 text-sm text-gray-700">
                <span className="whitespace-nowrap block">{formatDate(item.updatedAt)}</span>
                <span className="whitespace-nowrap block">{formatTime(item.updatedAt)}</span>
              </td>
              <td className="p-1 pr-0 text-right whitespace-nowrap">
                <button className="btn primary mx-2 inline-block">Edit</button>
                <button
                  className="btn danger inline-block"
                  onClick={()=>onDelete(item.id,type)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

}

export default TabContent;