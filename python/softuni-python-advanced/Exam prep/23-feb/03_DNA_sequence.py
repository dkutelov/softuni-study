def get_repeating_DNA(text):
    repeated_seq = []

    for i in range(len(text) - 10):
        current_seq = text[i: i+10]
        if current_seq in text[i+1:] and current_seq not in repeated_seq:
            repeated_seq.append(current_seq)

    return repeated_seq

print(get_repeating_DNA('AAAAAAAAAAA'))