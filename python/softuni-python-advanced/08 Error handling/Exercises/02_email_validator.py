valid_domains = ('com', 'bg', 'org', 'net')


class NameTooShortError(Exception):
    """ Raised when username is 4 symbols or less"""
    def __init__(self, message='Name must be more than 4 characters'):
        self.message = message
        super().__init__(message)


class MustContainAtSymbolError(Exception):
    """ Raised for missing @ in the email"""
    def __init__(self, message='Email must contain @'):
        self.message = message
        super().__init__(message)


class InvalidDomainError(Exception):
    """ Raised when domain is not .com, .bg, .org, .net"""
    def __init__(self, allowed_domains):
        message = f'Domain must be one of the following: {", ".join([f".{domain}" for domain in allowed_domains])}'
        super().__init__(message)


def validate_name(email):
    username = email.split('@')[0]
    if len(username) <= 4:
        raise NameTooShortError()


def validate_at_symbol(email):
    if '@' not in email:
        raise MustContainAtSymbolError()


def validate_domain(email, allowed_domains):
    domain = email.split('.')[-1]
    if domain not in valid_domains:
        raise InvalidDomainError(allowed_domains)


while True:
    line = input()

    if line == 'End':
        break

    validate_name(line)
    validate_at_symbol(line)
    validate_domain(line, valid_domains)

    print('Email is valid')
