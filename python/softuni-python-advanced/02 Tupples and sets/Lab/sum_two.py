# sorted - two pointer algorithm
my_list = [1, 2, 3, 4, 6, 8, 11, 15, 17, 20, 22]

def sum_to_numbers(num):
    index_left = 0
    index_right = len(my_list) - 1

    while index_left != index_right:
        two_sum = my_list[index_left] + my_list[index_right]

        if two_sum == num:
            print([my_list[index_left], my_list[index_right]])
            break
        elif two_sum > num:
            index_right -= 1
        elif two_sum < num:
            index_left += 1
    else:
        print('No match!')

sum_to_numbers(20)

# unsorted - set or dict

# when returning indexes fastest is with dict

class Solution(object):
    def twoSum(self, nums, target):
        i = 0
        differences = {}
        while i < len(nums):
            current_num = nums[i]
            difference = target - current_num
            if current_num in differences:
                return [differences[current_num], i]
            else:
                differences[difference] = i
            i += 1

solution = Solution()


res = solution.twoSum([3,2,4], 6)
print(res)


class Solution(object):
    def twoSum(self, nums, target):
        i = 0
        differences = set()
        while i < len(nums):
            current_num = nums[i]
            difference = target - current_num
            if current_num in differences:
                return [nums.index(target - current_num), i]
            else:
                differences.add(difference)
            i += 1

solution = Solution()


res = solution.twoSum([3,2,4], 6)
print(res)