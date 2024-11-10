import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@material-tailwind/react';

export function NonprofitsKnowMore() {
  return (
    <div className="px-16 mt-10 flex justify-center">
      <Card className="p-4 rounded-3xl m-1 justify-center bg-primary-dark-650">
        <div className="pt-8 rounded-xl m-1 bg-primary-light-450">
          <CardHeader className="text-primary-dark-750 w-60 text-center p-2 bg-primary-light-200 font-bold text-xl mx-auto">
            ONG Cachorrinho
            {/* {nonProfitsId.name} */}
          </CardHeader>
          <CardBody className="w-96 px-4">
            <img
              className="h-full w-full rounded-lg"
              src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMGFkb3B0aW9ufGVufDB8fDB8fHww"
            ></img>
          </CardBody>
          <CardFooter className="p-0 flex justify-center">
            <Button className="bg-primary-light-700 font-bold text-xl w-60">
              Saiba mais
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
