# Class to obtain info about the companies

class Company:
    def __init__(self, id, name, current_field, field_desired, profit):
    
        self.id = int(id)
        self.name = name
        self.comp_field = current_field
        self.field_desired = field_desired
        self.profit = float(profit)


