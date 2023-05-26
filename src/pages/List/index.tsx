import Card from '../../components/Card';
import dataJSON from '../../shared/data/jsonviewer.json';

const List = () => {
  return (
    <div>
      <Card title='Welcome' 
      body='With supporting as a natural lead-in to additional content.' 
      underBody={'You have ' + dataJSON.total + ' transactions'}
      link='navigator?tab=0' />
    </div>
  )
}

export default List;
