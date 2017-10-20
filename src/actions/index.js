export const SELECT_TIMEZONE = 'select_timezone';

export function selectTimezone(tz) {
    return {
        type: SELECT_TIMEZONE,
        payload: tz
    }
}