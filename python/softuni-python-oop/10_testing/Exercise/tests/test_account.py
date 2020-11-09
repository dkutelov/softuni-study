from project.account import Account

import unittest


class TestAccount(unittest.TestCase):
    def test_init_whenValidArguments_shouldCreate(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)

        self.assertEqual(owner, account.owner)
        self.assertEqual(amount, account.amount)
        self.assertListEqual([], account._transactions)

    def test_init_whenOnlyOwnerArguments_shouldCreateWithAmountZero(self):
        owner = 'test owner'
        account = Account(owner)

        self.assertEqual(owner, account.owner)
        self.assertEqual(0, account.amount)
        self.assertListEqual([], account._transactions)

    def test_accountAddTransaction_whenValidIntAmount_shouldAppendAmountToTransactions(self):
        owner = 'test owner'
        account = Account(owner)

        account.add_transaction(1)
        self.assertListEqual([1], account._transactions)

    def test_accountAddTransaction_whenInvalidTypeOfAmount_shouldRaise(self):
        owner = 'test owner'
        account = Account(owner)

        with self.assertRaises(Exception) as context:
            account.add_transaction('1')
        the_exception = context.exception
        self.assertEqual(str(the_exception), 'please use int for amount')

    def test_accountBalance_shouldReturnAmountPlusSumOfAllTransactions(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        account._transactions = [1]
        expected = 2
        actual = account.balance
        self.assertEqual(expected, actual)

    def test_accountValidateTransaction_whenBalanceAndAmountPositive_shouldAddTransactionAndReturnBalance(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        actual_message = Account.validate_transaction(account, 1)

        self.assertListEqual([amount], account._transactions)
        self.assertEqual(f'New balance: 2', actual_message)

    def test_accountValidateTransaction_whenBalanceAndAmountNegative_shouldRaise(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)

        with self.assertRaises(Exception) as context:
            Account.validate_transaction(account, -2)
        the_exception = context.exception
        self.assertEqual('sorry connot go in dept', str(the_exception))

    def test_accountStr_shouldReturnSpecifiedString(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        expected = f'Account of {owner} with starting amount: {amount}'
        actual = account.__str__()
        self.assertEqual(expected, actual)

    def test_accountRepr_shouldReturnSpecifiedString(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        expected = f'Account({owner}, {amount})'
        actual = account.__repr__()
        self.assertEqual(expected, actual)

    def test_accountLen_shouldNumberOfTransactions(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        transactions = [1, 2, 3]
        account._transactions = [1, 2, 3]
        expected = len(transactions)
        actual = account.__len__()
        self.assertEqual(expected, actual)

    def test_accountGetItem_whenValidIndex_shouldReturnTransactionAtIndex(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        account._transactions = [1, 2, 3]
        expected = 2
        actual = account.__getitem__(1)
        self.assertEqual(expected, actual)

    def test_accountReversed_shouldReturnReversedListOfTransactions(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        account._transactions = [1, 2, 3]
        expected = [3, 2, 1]
        actual = list(account.__reversed__())
        self.assertListEqual(expected, actual)

    def test_accountComparisons_shouldReturnCorrectComparison(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        account._transactions = [1]

        other_owner = 'other owner'
        other_amount = 2
        other = Account(other_owner, other_amount)
        other._transactions = [2]

        self.assertFalse(account == other)
        self.assertTrue(account != other)
        self.assertFalse(account > other)
        self.assertFalse(account >= other)
        self.assertTrue(account < other)
        self.assertTrue(account <= other)

    def test_accountAdd_shouldReturnNewAccountAddingTwo(self):
        owner = 'test owner'
        amount = 1
        account = Account(owner, amount)
        account._transactions = [1]

        other_owner = 'other owner'
        other_amount = 2
        other = Account(other_owner, other_amount)
        other._transactions = [2]

        new_account = account + other

        self.assertTrue(isinstance(new_account, Account))
        self.assertEqual(f'{owner}&{other_owner}', new_account.owner)
        self.assertEqual(amount + other_amount, new_account.amount)
        self.assertListEqual([1, 2], new_account._transactions)


if __name__ == '__main__':
    unittest.main()

