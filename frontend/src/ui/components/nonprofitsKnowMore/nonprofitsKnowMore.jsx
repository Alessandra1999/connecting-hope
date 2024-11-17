import { Button } from '@material-tailwind/react';

export function NonprofitsKnowMore() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col p-4 rounded-3xl justify-center border-opacity-75 border-primary-dark-650 bg-primary-light-450 border-8 gap-4 dark:border-white dark:border-opacity-20 dark:bg-primary-dark-100 dark:bg-opacity-20">
        <div className="mx-auto rounded-lg text-primary-dark-750 w-60 text-center bg-primary-light-200 font-bold text-xl p-2 dark:bg-primary-dark-700 dark:text-white">
          ONG Cachorrinho
          {/* {nonProfitsId.name} */}
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMGFkb3B0aW9ufGVufDB8fDB8fHww"
          ></img>
        </div>
        <div className="flex justify-center">
          <Button className="bg-primary-light-700 font-bold text-xl w-60 dark:bg-primary-dark-700">
            Saiba mais
          </Button>
        </div>
      </div>
    </div>
  );
}
