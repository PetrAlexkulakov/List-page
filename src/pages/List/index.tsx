import Card from '../../components/Card';
import dataJSON from '../../shared/data/jsonviewer.json';

const List = () => {
  return (
    <div>
      <Card title='Welcome' 
      body='With supporting as a natural lead-in to additional content.' 
      underBody={dataJSON.total} />
    </div>
  )
}

export default List;
