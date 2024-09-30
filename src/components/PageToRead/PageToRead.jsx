import { useContext, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ReadContext } from '../Root/Root';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadBook } from '../../utility/fn';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


export default function PageToRead() {
  // const readBook = useContext(ReadContext);
  const bookData = useLoaderData();
  const readBookId = getStoredReadBook();

  const filteredBooks = bookData?.filter(book => readBookId.includes(book.bookId));

  function createAcronym(phrase) {
    const wordsArray = phrase.split(' ');
    return wordsArray.map(word => word.charAt(0).toLowerCase()).join('');
  }

  const data = filteredBooks.map(book => ({
    name: createAcronym(book.bookName),
    uv: book.totalPages,
    pv: 2400,
    amt: 2400
  }));


  return (
    <div className='flex justify-center items-center mt-20'>
      <BarChart
        width={filteredBooks.length === 1 ? 100 : filteredBooks.length * 100}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  )
}
