import Card from '../../components/Card';
import dataJSON from '../../shared/data/jsonviewer.json';

const List = () => {
  const data = dataJSON.data;

  function floating(min: number = 0, max: number = 0, quantity: number = 0): number {
    const randomValue = Math.random() * (max - min) + min;
    const factor = Math.pow(10, quantity);
    return Math.round(randomValue * factor) / factor;
  }

  function findAmount(amount: string) {
    if (amount.search(/floating/) !== -1) {
      const numbers = (amount.match(/\d+/g) || [0,0,0]).map(Number).slice(0, 2) as [number, number, number];

      return floating.apply(null, numbers);
    }
    return 0;
  }

  function findAllAmount(type: string) {
    return data.reduce((accumulator, current) => {
      if (current.type === type)
      return accumulator + findAmount(current.amount);

      return accumulator;
    }, 0)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 grid grid-cols-2 gap-4">
        <Card className="col-span-2"
        title='Welcome' 
        body='With supporting as a natural lead-in to additional content.' 
        underBody={'You have ' + dataJSON.total + ' transactions'}
        link='navigator?tab=0' />
        <Card className="col-span-1 rounded-lg" title={findAllAmount('income')} body='Income' link='navigator?tab=0' />
        <Card className="col-span-1 rounded-lg" title={findAllAmount('outcome')} body='Outcome' link='navigator?tab=1' />
        <Card className="col-span-1 rounded-lg" title={findAllAmount('loan')} body='Loans' link='navigator?tab=2' />
        <Card className="col-span-1 rounded-lg" title={findAllAmount('investment')} body='Investments' link='navigator?tab=3' />
      </div>
    </div>
  )
}

export default List;
