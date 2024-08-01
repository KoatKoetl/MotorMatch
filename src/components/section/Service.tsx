import { MessageSquareHeart, Sparkles, Trophy, Truck } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function Service() {
  return (
    <section className="flex gap-2 sm:gap-5 flex-wrap sm:justify-normal justify-center">
      <Card>
        <CardHeader>
          <Truck />
          <CardTitle>Fast Shipping</CardTitle>
          <CardDescription>On all orders</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <Sparkles />
          <CardTitle>Top Quality</CardTitle>
          <CardDescription>Only verified cars</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <Trophy />
          <CardTitle>Top Models</CardTitle>
          <CardDescription>Buy only from the top ones</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <MessageSquareHeart />
          <CardTitle>24/7 Support</CardTitle>
          <CardDescription>Ready for you</CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
