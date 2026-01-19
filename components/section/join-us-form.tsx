import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function JoinUsForm() {
    return (
        <section className="py-24">
            <div className="mx-auto w-full max-w-2xl px-6">

                <form className="space-y-8">

                    <FieldGroup>

                        <FieldSet>
                            <FieldLegend>Join the Movement</FieldLegend>
                            <FieldDescription>
                                Fill in your details to become part of Inquilab
                            </FieldDescription>

                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                    <Input
                                        id="name"
                                        placeholder="Your full name"
                                        required
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="phone">Phone (Optional)</FieldLabel>
                                    <Input
                                        id="phone"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </Field>
                            </FieldGroup>
                        </FieldSet>

                        <FieldSeparator />

                        <FieldSet>
                            <FieldLegend>How would you like to contribute?</FieldLegend>

                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="contribution">Contribution Type</FieldLabel>
                                    <Select>
                                        <SelectTrigger id="contribution">
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="volunteer">Volunteer</SelectItem>
                                            <SelectItem value="events">Participate in Events</SelectItem>
                                            <SelectItem value="awareness">Spread Awareness</SelectItem>
                                            <SelectItem value="digital">Digital Support</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="message">Why do you want to join?</FieldLabel>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us your motivation..."
                                        className="resize-none"
                                    />
                                </Field>
                            </FieldGroup>
                        </FieldSet>

                        <FieldSeparator />

                        <Field orientation="horizontal" className="pt-4">
                            <Button type="submit">Submit</Button>
                            <Button type="reset" variant="outline">
                                Cancel
                            </Button>
                        </Field>

                    </FieldGroup>
                </form>
            </div>
        </section>
    )
}
