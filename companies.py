# Class to obtain info about the companies

class Company:
    def __init__(self, id, name, comp_field, field_desired, profit):
    
        self.id = int(id)
        self.name = name
        self.comp_field = comp_field
        self.field_desired = field_desired
        self.profit = float(profit)

c = Company(12121111, "H", "fiannce", "poop", 29876)
print(c.comp_field)
