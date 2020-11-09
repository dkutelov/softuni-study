from project.worker import Worker
import unittest


# class WorkerTestsMy(unittest.TestCase):
#     def setUp(self):
#         self.worker = Worker("Luc Peterson", 2000, 21)
#
#     def test_worker_name(self):
#         result = self.worker.name
#         expected_result = "Luc Peterson"
#         self.assertEqual(result, expected_result)
#
#     def test_worker_salary(self):
#         result = self.worker.salary
#         expected_result = 2000
#         self.assertEqual(result, expected_result)
#
#     def test_worker_name(self):
#         result = self.worker.energy
#         expected_result = 21
#         self.assertEqual(result, expected_result)
#
#     def test_is_worker_energy_incremented_after_rest(self):
#         self.worker.rest()
#         result = self.worker.energy
#         expected_result = 22
#         self.assertEqual(result, expected_result)
#
#     def test_error_if_work_with_negative_or_zero_energy(self):
#         self.worker.energy = 0
#         with self.assertRaises(Exception) as cm:
#             self.worker.work()
#         the_exception = cm.exception
#         print(the_exception)
#         self.assertEqual(str(the_exception), 'Not enough energy.')
#
#     def test_work_method_increase_of_money_with_salary(self):
#         self.worker.money = 0
#         self.worker.salary = 10
#         self.worker.work()
#         result = self.worker.money
#         expected_result = 10
#         self.assertEqual(result, expected_result)
#
#     def test_work_method_decrease_of_energy(self):
#         self.worker.energy = 21
#         self.worker.work()
#         result = self.worker.energy
#         expected_result = 20
#         self.assertEqual(result, expected_result)
#
#     def test_get_info(self):
#         self.worker.money = 100
#         result = self.worker.get_info()
#         expected_result = 'Luc Peterson has saved 100 money.'
#         self.assertEqual(result, expected_result)


class WorkerTests(unittest.TestCase):
    def test_workerInit_CorrectNameSalaryAndEnergy_shouldBeInitialized(self):
        name = 'Worker name'
        salary = 123
        energy = 5
        worker = Worker(name, salary, energy)
        self.assertEqual(name, worker.name)
        self.assertEqual(salary, worker.salary)
        self.assertEqual(energy, worker.energy)
        self.assertEqual(0, worker.money)

    def test_workerRest_shouldIncrementEnergy(self):
        name = 'Worker name'
        salary = 123
        energy = 5
        worker = Worker(name, salary, energy)
        worker.rest()

        self.assertEqual(energy + 1, worker.energy)

    def test_workerWork_energyIsZero_shouldRaiaseException(self):
        name = 'Worker name'
        salary = 123
        energy = 0
        worker = Worker(name, salary, energy)

        with self.assertRaises(Exception) as context:
            worker.work()
        self.assertIsNotNone(context.exception)

    def test_workerWork_shouldIncreaseMoneyBySalary(self):
        name = 'Worker name'
        salary = 123
        energy = 5
        worker = Worker(name, salary, energy)
        worker.work()
        self.assertEqual(salary, worker.money)
        worker.work()
        self.assertEqual(salary * 2, worker.money)

    def test_workerWork_shouldDecreaseEnergy(self):
        name = 'Worker name'
        salary = 123
        energy = 5
        worker = Worker(name, salary, energy)
        worker.work()
        self.assertEqual(energy - 1, worker.energy)

    def test_workerGetInfo_shouldReturnCorrectString(self):
        name = 'Worker name'
        salary = 123
        energy = 5
        worker = Worker(name, salary, energy)
        expected = f'{name} has saved 0 money.'
        actual = worker.get_info()
        self.assertEqual(expected, actual)


if __name__ == '__main__':
    unittest.main()
