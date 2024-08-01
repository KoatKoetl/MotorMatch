import Title from '../Title';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function Customizable() {
  return (
    <div>
      <Title className="text-3xl font-bold text-gray-800 mb-4">Customizable Options</Title>
      <p>Here are some ideas.</p>
      <div className="flex flex-wrap *:max-w-sm gap-4 2xl:justify-between justify-center mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Make and Model</CardTitle>
            <CardDescription className="text-gray-600">
              Users can filter their search by selecting specific car makes and models, allowing them to find exactly the type of vehicle
              they are looking for.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Price Range</CardTitle>
            <CardDescription className="text-gray-600">
              Users can set a minimum and maximum price range to find cars that fit their budget, ensuring they see only the options they
              can afford.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Year of Manufacture</CardTitle>
            <CardDescription className="text-gray-600">
              Users can filter by the year of manufacture to find cars within a specific age range, whether they are looking for a brand-new
              model or a reliable used car.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mileage</CardTitle>
            <CardDescription className="text-gray-600">
              Users can specify a mileage range to ensure they find cars that have been driven within their preferred limits, helping to
              balance between usage and value.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription className="text-gray-600">
              Users can search for cars within a certain radius of their location, making it convenient to find cars that are nearby and
              easy to inspect or purchase.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Body Type</CardTitle>
            <CardDescription className="text-gray-600">
              Users can select their preferred body type, such as sedan, SUV, hatchback, or convertible, to narrow down their search to the
              style of car they desire.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fuel Type</CardTitle>
            <CardDescription className="text-gray-600">
              Users can filter by fuel type, including options like gasoline, diesel, electric, or hybrid, to find cars that meet their fuel
              efficiency and environmental preferences.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
