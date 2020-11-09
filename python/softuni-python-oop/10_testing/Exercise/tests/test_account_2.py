from project.account import Account

import unittest
import types


class TestAccount(unittest.TestCase):
    def setUp(self):
        self.account = Account("Dari", 50)
        self.account_other = Account("Andi", 100)

    def test_validate_transaction(self):
        result = Account.validate_transaction(self.account, 50)
        self.assertEqual('New balance: 100', result)

    def test_validate_transaction_raises_exception(self):
        with self.assertRaises(ValueError) as ex:
            res = Account.validate_transaction(self.account, -51)

    def test_custom_str(self):
        result = str(self.account)
        self.assertEqual('Account of Dari with starting amount: 50', result)

    def test_custom_repr(self):
        result = repr(self.account)
        self.assertEqual('Account(Dari, 50)', result)

    def test_add_transaction_invalid_type(self):
        with self.assertRaises(ValueError) as ex:
            self.account.add_transaction(5.6)

    def test_add_transaction(self):
        self.assertEqual(0, len(self.account._transactions))
        self.account.add_transaction(20)
        self.assertEqual(1, len(self.account._transactions))
        self.assertEqual(70, self.account.balance)  # add 1

    def test_custom_get_item(self):
        self.account.add_transaction(20)
        self.account.add_transaction(150)
        result = self.account[1]
        self.assertEqual(150, result)

    def test_raise_error_index(self):  # missing
        with self.assertRaises(IndexError) as ex:
            self.assertEqual(self.account[0], 20)

    def test_custom_reversed_transactions(self):
        self.account.add_transaction(10)
        self.account.add_transaction(20)
        expected = [20, 10]
        actual = list(reversed(self.account))
        self.assertListEqual(expected, actual)

    def test_custom_not_equal(self):
        self.assertNotEqual(self.account, self.account_other)
        self.assertTrue(self.account_other != self.account)

    def test_custom_less_than(self):
        self.assertLess(self.account, self.account_other)

    def test_custom_greater_than(self):
        self.assertGreater(self.account_other, self.account)
        self.assertTrue(self.account_other > self.account)

    def test_custom_add(self):
        account_3 = self.account + self.account_other
        account_3.add_transaction(10)
        account_3.add_transaction(10)
        self.assertEqual('Account(Dari&Andi, 150)', repr(account_3))
        self.assertEqual(170, account_3.balance)
        self.assertEqual('Dari&Andi', account_3.owner)
        self.assertListEqual([10, 10], account_3._transactions)

    def test_custom_len(self):
        self.account.add_transaction(20)
        self.account.add_transaction(50)
        result = len(self.account)
        self.assertEqual(2, result)

    def test_custom_equal(self):
        account_3 = Account('Test', 50)
        self.assertEqual(self.account, account_3)
        self.assertTrue(account_3 == self.account)

    def test_add_transaction_is_static(self):
        self.assertTrue(isinstance(self.account.validate_transaction, types.FunctionType))

    def test_balance_property(self):
        self.assertEqual(50, self.account.balance)
        self.account.add_transaction(50)
        self.assertEqual(100, self.account.balance)

    def test_custom_iter(self):
        self.account.add_transaction(50)
        self.account.add_transaction(50)
        for t in self.account:
            self.assertEqual(50, t)

    def test_custom_greater_than_or_equal(self):
        self.assertGreaterEqual(self.account_other, self.account)
        account_3 = Account('Test 3', 50)
        self.assertGreaterEqual(self.account, account_3)

    def test_custom_less_than_or_equal(self):
        account_3 = Account('Test', 50)
        self.assertLessEqual(self.account, self.account_other)
        self.assertLessEqual(self.account, account_3)


if __name__ == '__main__':
    unittest.main()

