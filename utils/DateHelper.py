from datetime import datetime
import time


class DateHelper():
    def get_now_timestamp(self):
        return self.convert_datetime_to_timestamp(datetime.now())

    @staticmethod
    def convert_datetime_to_timestamp(datetime):
        return time.mktime(datetime.timetuple())

    @staticmethod
    def convert_timestamp_to_date(timestamp):
        return datetime.fromtimestamp(int(timestamp) // 1e3).isoformat()
