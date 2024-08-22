import { useState } from 'react';
import './App.css';
import { InputGroup } from './components/InputGroup/InputGroup';

function App() {
  const [query, setQuery] = useState<string>('');
  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
  };
  return (
    <div className={'container'}>
      <form>
        <InputGroup
          placeholderText="Enter your email"
          disabled={false}
          labelPosition="top"
          error={false}
          hint={true}
          description="Enter your email please for login"
          errorMessage="Enter your email please for login"
          iconBefore
          iconAfter
          shortKey
          infoIcon={{ visibility: 'always', infoMessage: 'Hello, guys' }}
          textField={{ fieldOption: 'optional', value: 'none' }}
          labelText={'Enter your email please for login'}
          value={query}
          onChange={onHandleChange}
        />
      </form>
    </div>
  );
}

export default App;
