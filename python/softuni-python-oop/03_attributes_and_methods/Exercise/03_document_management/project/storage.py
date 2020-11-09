class Storage:
    def __init__(self):
        self.categories = []
        self.topics = []
        self.documents = []

    def add_category(self, category):
        if category not in self.categories:
            self.categories.append(category)

    def add_topic(self, topic):
        if topic not in self.topics:
            self.topics.append(topic)

    def add_document(self, document):
        if document not in self.documents:
            self.documents.append(document)

    def get_category_by_id(self, category_id):
        category_list = list(filter(lambda x: x.id == category_id, self.categories))
        if category_list:
            return category_list[0]

    def get_document_by_id(self, document_id):
        document_list = list(filter(lambda x: x.id == document_id, self.documents))
        if document_list:
            return document_list[0]

    def get_topic_by_id(self, topic_id):
        topic_list = list(filter(lambda x: x.id == topic_id, self.topics))
        if topic_list:
            return topic_list[0]

    def edit_category(self, category_id: int, new_name:str):
        category = self.get_category_by_id(category_id)
        if category:
            category.name = new_name

    def edit_topic(self, topic_id: int, new_topic: str, new_storage_folder: str):
        topic = self.get_topic_by_id(topic_id)
        if topic:
            topic.topic = new_topic
            topic.storage_folder = new_storage_folder

    def edit_document(self, document_id: int, new_file_name: str):
        document = self.get_document_by_id(document_id)
        if document:
            document.file_name = new_file_name

    def delete_category(self, category_id):
        category = self.get_category_by_id(category_id)
        if category:
            self.categories.remove(category)

    def delete_topic(self, topic_id):
        topic = self.get_topic_by_id(topic_id)
        if topic:
            self.topics.remove(topic)

    def delete_document(self, document_id):
        document = self.get_document_by_id(document_id)
        if document:
            self.documents.remove(document)

    def get_document(self, document_id):
        document = self.get_document_by_id(document_id)
        if document:
            return document

    def __repr__(self):
        result = f''
        for document in self.documents:
            result += f'{document}\n'
        return result