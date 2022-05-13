<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $customers = [
            [
                'token' => 'DAVID7',
                'name' => 'NDOUMA Boris Marvin',
                'password' => Hash::make('12345'),
                'language_id' => 1,
            ],
            [
                'token' => 'BRIAND',
                'name' => 'YUNGONG JINI Brijean',
                'password' => Hash::make('11223344'),
                'language_id' => 1,
            ],
        ];

        foreach ($customers as $customer) {
            Customer::create($customer);
        }
    }
}
